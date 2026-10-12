
"use strict";

const NexHealth = (() => {
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const STORAGE = {
        records: "nexhealth_records",
        tasks: "nexhealth_tasks",
        appointments: "nexhealth_appointments",
        meals: "nexhealth_meals",
        analyses: "nexhealth_analyses",
        messages: "nexhealth_messages",
        profile: "nexhealth_profile",
        consent: "nexhealth_consent"
    };

    const read = (key, fallback) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch {
            return fallback;
        }
    };

    const state = {
        screen: "overview",
        records: read(STORAGE.records, []),
        tasks: read(STORAGE.tasks, []),
        appointments: read(STORAGE.appointments, []),
        meals: read(STORAGE.meals, []),
        analyses: read(STORAGE.analyses, []),
        messages: read(STORAGE.messages, []),
        profile: read(STORAGE.profile, {}),
        consent: read(STORAGE.consent, {
            necessary: true,
            analytics: false,
            aiProcessing: false,
            healthcareSharing: false
        }),
        recordFilter: "all",
        taskFilter: "all",
        appointmentFilter: "upcoming",
        selectedFile: null,
        busy: false
    };

    const save = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            toast("Unable to save browser data. Check available storage.", "error");
            return false;
        }
    };

    const persist = () => {
        save(STORAGE.records, state.records);
        save(STORAGE.tasks, state.tasks);
        save(STORAGE.appointments, state.appointments);
        save(STORAGE.meals, state.meals);
        save(STORAGE.analyses, state.analyses);
        save(STORAGE.messages, state.messages);
        save(STORAGE.profile, state.profile);
        save(STORAGE.consent, state.consent);
    };

    const id = () =>
        crypto.randomUUID?.() ||
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const escapeHTML = value =>
        String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    const today = () => {
        const date = new Date();
        const offset = date.getTimezoneOffset();
        return new Date(date.getTime() - offset * 60000)
            .toISOString().slice(0, 10);
    };

    const formatDate = value => {
        if (!value) return "Date not set";
        const date = new Date(`${value}`.length === 10 ? `${value}T12:00:00` : value);
        if (Number.isNaN(date.getTime())) return value;
        return new Intl.DateTimeFormat(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        }).format(date);
    };

    const formatSize = bytes => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const toast = (message, type = "success") => {
        let region = $("#toast-region") || $(".toast-region");

        if (!region) {
            region = document.createElement("div");
            region.className = "toast-region";
            region.id = "toast-region";
            document.body.appendChild(region);
        }

        const item = document.createElement("div");
        item.className = `toast ${type}`;
        item.setAttribute("role", "status");
        item.textContent = message;
        region.appendChild(item);

        window.setTimeout(() => item.remove(), 3500);
    };

    const refreshIcons = () => {
        if (window.lucide?.createIcons) {
            window.lucide.createIcons();
        }
    };

    const screenAliases = {
        "overview": "overview",
        "medical-records": "medical-records",
        "records": "medical-records",
        "ai-analyzer": "ai-analyzer",
        "analyzer": "ai-analyzer",
        "diet-tasks": "diet-tasks",
        "diet": "diet-tasks",
        "tasks": "diet-tasks",
        "appointments": "appointments",
        "health-services": "health-services",
        "services": "health-services",
        "ai-mentor": "ai-mentor",
        "mentor": "ai-mentor",
        "privacy-consent": "privacy-consent",
        "privacy": "privacy-consent"
    };

    const navigate = requested => {
        const target = screenAliases[requested] || requested;
        const panel = $(`[data-screen-panel="${target}"]`);

        if (!panel) {
            toast(`Screen "${target}" was not found.`, "error");
            return;
        }

        state.screen = target;

        $$("[data-screen-panel]").forEach(item => {
            const active = item === panel;
            item.hidden = !active;
            item.classList.toggle("active", active);
        });

        $$("[data-screen]").forEach(item => {
            const active = (screenAliases[item.dataset.screen] || item.dataset.screen) === target;
            item.classList.toggle("active", active);

            if (active && item.classList.contains("nav-item")) {
                item.setAttribute("aria-current", "page");
            } else {
                item.removeAttribute("aria-current");
            }
        });

        const heading = panel.querySelector("h1");
        const breadcrumb = $("#breadcrumbCurrent");

        if (breadcrumb) {
            breadcrumb.textContent = heading?.textContent.trim() || target;
        }

        document.title = `${heading?.textContent.trim() || "NexHealth"} | NexHealth`;

        document.body.classList.remove("sidebar-open");

        if ($("#mobileMenuButton")) {
            $("#mobileMenuButton").setAttribute("aria-expanded", "false");
        }

        window.scrollTo({ top: 0, behavior: "auto" });

        renderAll();
        refreshIcons();
    };

    const openModal = (title, content, onSubmit, submitText = "Save") => {
        let backdrop = $("#nexhealthModal");

        if (!backdrop) {
            backdrop = document.createElement("div");
            backdrop.id = "nexhealthModal";
            backdrop.className = "modal-backdrop";
            backdrop.hidden = true;
            document.body.appendChild(backdrop);
        }

        backdrop.innerHTML = `
            <section class="modal" role="dialog" aria-modal="true"
                aria-labelledby="nexhealthModalTitle">
                <header class="modal-header">
                    <div>
                        <h2 id="nexhealthModalTitle">${escapeHTML(title)}</h2>
                    </div>
                    <button type="button" class="icon-button" data-close-modal
                        aria-label="Close dialog">×</button>
                </header>
                <form id="nexhealthModalForm">
                    <div class="modal-body">${content}</div>
                    <footer class="modal-footer">
                        <button type="button" class="button button-secondary"
                            data-close-modal>Cancel</button>
                        <button type="submit" class="button button-primary">
                            ${escapeHTML(submitText)}
                        </button>
                    </footer>
                </form>
            </section>
        `;

        backdrop.hidden = false;
        refreshIcons();

        const form = $("#nexhealthModalForm", backdrop);
        $("input, select, textarea", form)?.focus();

        form.addEventListener("submit", async event => {
            event.preventDefault();

            const button = $('button[type="submit"]', form);
            button.disabled = true;

            try {
                await onSubmit(new FormData(form));
                backdrop.hidden = true;
                backdrop.innerHTML = "";
            } catch (error) {
                toast(error.message || "Unable to save changes.", "error");
            } finally {
                button.disabled = false;
            }
        });
    };

    const closeModal = () => {
        const modal = $("#nexhealthModal");
        if (modal) modal.hidden = true;
    };

    const field = (label, name, type = "text", options = {}) => {
        const required = options.required ? "required" : "";
        const value = options.value ?? "";
        const placeholder = options.placeholder || "";

        if (type === "select") {
            const choices = (options.choices || []).map(choice => {
                const optionValue = typeof choice === "string" ? choice : choice.value;
                const optionLabel = typeof choice === "string" ? choice : choice.label;

                return `<option value="${escapeHTML(optionValue)}">
                    ${escapeHTML(optionLabel)}
                </option>`;
            }).join("");

            return `
                <div class="form-field">
                    <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                    <select id="field-${escapeHTML(name)}" name="${escapeHTML(name)}" ${required}>
                        ${choices}
                    </select>
                </div>`;
        }

        if (type === "textarea") {
            return `
                <div class="form-field">
                    <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                    <textarea id="field-${escapeHTML(name)}" name="${escapeHTML(name)}"
                        placeholder="${escapeHTML(placeholder)}" ${required}>${escapeHTML(value)}</textarea>
                </div>`;
        }

        return `
            <div class="form-field">
                <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                <input id="field-${escapeHTML(name)}" name="${escapeHTML(name)}"
                    type="${escapeHTML(type)}" value="${escapeHTML(value)}"
                    placeholder="${escapeHTML(placeholder)}"
                    ${options.min !== undefined ? `min="${options.min}"` : ""}
                    ${options.max !== undefined ? `max="${options.max}"` : ""}
                    ${options.step !== undefined ? `step="${options.step}"` : ""}
                    ${required}>
            </div>`;
    };

    const openTaskModal = () => {
        openModal(
            "Add a health task",
            field("Task name", "title", "text", {
                required: true,
                placeholder: "e.g. Drink water"
            }) +
            field("Category", "category", "select", {
                required: true,
                choices: ["Medication", "Nutrition", "Activity", "Appointment", "Other"]
            }) +
            field("Due date", "due_date", "date", {
                required: true,
                value: today()
            }) +
            field("Notes", "notes", "textarea", {
                placeholder: "Optional details"
            }),
            form => {
                const task = {
                    id: id(),
                    title: form.get("title").trim(),
                    category: form.get("category"),
                    due_date: form.get("due_date"),
                    notes: form.get("notes").trim(),
                    completed: false,
                    created_at: new Date().toISOString()
                };

                if (!task.title) throw new Error("Enter a task name.");

                state.tasks.unshift(task);
                persist();
                renderAll();
                toast("Task added.");
            }
        );
    };

    const openAppointmentModal = () => {
        openModal(
            "New appointment",
            field("Appointment title", "title", "text", {
                required: true,
                placeholder: "e.g. Dentist visit"
            }) +
            field("Doctor or clinic", "provider", "text", {
                placeholder: "Optional"
            }) +
            field("Appointment type", "category", "select", {
                required: true,
                choices: ["General consultation", "Dental", "Laboratory", "Specialist", "Follow-up", "Other"]
            }) +
            field("Date", "date", "date", {
                required: true,
                value: today()
            }) +
            field("Time", "time", "time", { required: true }) +
            field("Location", "location", "text", { placeholder: "Clinic or hospital" }) +
            field("Notes", "notes", "textarea", { placeholder: "Optional details" }),
            form => {
                const appointment = {
                    id: id(),
                    title: form.get("title").trim(),
                    provider: form.get("provider").trim(),
                    category: form.get("category"),
                    date: form.get("date"),
                    time: form.get("time"),
                    location: form.get("location").trim(),
                    notes: form.get("notes").trim(),
                    created_at: new Date().toISOString()
                };

                if (!appointment.title || !appointment.date || !appointment.time) {
                    throw new Error("Complete the required appointment fields.");
                }

                state.appointments.push(appointment);
                state.appointments.sort((a, b) =>
                    `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
                );

                persist();
                renderAll();
                toast("Appointment saved in this browser.");
            }
        );
    };

    const openMealModal = () => {
        openModal(
            "Add a meal",
            field("Meal name", "name", "text", {
                required: true,
                placeholder: "e.g. Vegetable rice"
            }) +
            field("Meal time", "meal_time", "select", {
                required: true,
                choices: ["Breakfast", "Lunch", "Dinner", "Snack"]
            }) +
            field("Date", "date", "date", { required: true, value: today() }) +
            field("Notes or ingredients", "notes", "textarea", {}),
            form => {
                const meal = {
                    id: id(),
                    name: form.get("name").trim(),
                    meal_time: form.get("meal_time"),
                    date: form.get("date"),
                    notes: form.get("notes").trim()
                };

                if (!meal.name) throw new Error("Enter a meal name.");

                state.meals.push(meal);
                persist();
                renderAll();
                toast("Meal added.");
            }
        );
    };

    const openUploadModal = () => {
        openModal(
            "Add a medical record",
            field("Record title", "name", "text", {
                required: true,
                placeholder: "e.g. Blood test report"
            }) +
            field("Record category", "category", "select", {
                required: true,
                choices: [
                    { value: "lab", label: "Lab report" },
                    { value: "prescription", label: "Prescription" },
                    { value: "imaging", label: "Imaging" },
                    { value: "other", label: "Other" }
                ]
            }) +
            `<div class="form-field">
                <label for="recordFile">Document (PDF or image)</label>
                <input type="file" id="recordFile" name="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp" required>
            </div>`,
            async form => {
                const file = form.get("file");
                if (!(file instanceof File) || !file.size) {
                    throw new Error("Choose a document first.");
                }
                if (file.size > 10 * 1024 * 1024) {
                    throw new Error("The maximum file size is 10 MB.");
                }

                const body = new FormData();
                body.append("file", file);

                const response = await fetch("/api/medical-records", {
                    method: "POST",
                    body
                });

                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(data.error || data.message || "Upload failed.");
                }

                state.records.unshift({
                    id: data.id || id(),
                    name: form.get("name").trim() || file.name,
                    category: form.get("category"),
                    file_name: data.file_name || file.name,
                    size: data.size || file.size,
                    mime_type: data.mime_type || file.type,
                    created_at: data.created_at || new Date().toISOString(),
                    storage: data.storage || "server",
                    status: data.status || "uploaded"
                });

                persist();
                renderAll();
                toast("Record uploaded to the server.");
            },
            "Upload record"
        );
    };

    const removeTask = taskId => {
        state.tasks = state.tasks.filter(task => task.id !== taskId);
        persist();
        renderAll();
        toast("Task deleted.");
    };

    const toggleTask = taskId => {
        const task = state.tasks.find(item => item.id === taskId);
        if (!task) return;

        task.completed = !task.completed;
        persist();
        renderAll();
    };

    const deleteAppointment = appointmentId => {
        state.appointments = state.appointments.filter(item => item.id !== appointmentId);
        persist();
        renderAll();
        toast("Appointment removed.");
    };

    const renderTasks = () => {
        const container = $("#dietTaskList");
        if (!container) return;

        let tasks = [...state.tasks];

        if (state.taskFilter === "pending") tasks = tasks.filter(task => !task.completed);
        if (state.taskFilter === "completed") tasks = tasks.filter(task => task.completed);

        if (!tasks.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>${state.tasks.length ? "No tasks in this filter" : "Create your first health task"}</strong>
                    <p>Add reminders for your daily routine.</p>
                    <button class="button button-secondary button-small"
                        type="button" data-action="add-task">Add a task</button>
                </div>`;
        } else {
            container.innerHTML = tasks.map(task => `
                <article class="task-item ${task.completed ? "completed" : ""}">
                    <label class="task-checkbox">
                        <input type="checkbox" data-action="toggle-task"
                            data-id="${escapeHTML(task.id)}" ${task.completed ? "checked" : ""}>
                        <span></span>
                    </label>
                    <div class="task-item-content">
                        <strong>${escapeHTML(task.title)}</strong>
                        <p>${escapeHTML(task.category || "Other")} · Due ${escapeHTML(formatDate(task.due_date))}</p>
                        ${task.notes ? `<small>${escapeHTML(task.notes)}</small>` : ""}
                    </div>
                    <button class="icon-button" type="button" data-action="delete-task"
                        data-id="${escapeHTML(task.id)}" aria-label="Delete task">×</button>
                </article>
            `).join("");
        }

        const total = state.tasks.length;
        const completed = state.tasks.filter(task => task.completed).length;
        const percentage = total ? Math.round(completed / total * 100) : 0;

        const progressText = $("#taskProgressText");
        const progressBar = $("#taskProgressBar");

        if (progressText) progressText.textContent = `${completed} of ${total} completed`;
        if (progressBar) progressBar.style.width = `${percentage}%`;

        const remaining = $("#metricTasks");
        if (remaining) remaining.textContent = total - completed;

        const overview = $("#overviewTaskList");
        if (overview) {
            const items = state.tasks.filter(task => !task.completed).slice(0, 4);

            overview.innerHTML = items.length ? items.map(task => `
                <label class="compact-task-item">
                    <input type="checkbox" data-action="toggle-task"
                        data-id="${escapeHTML(task.id)}">
                    <span>
                        <strong>${escapeHTML(task.title)}</strong>
                        <small>${escapeHTML(task.category || "Other")} · ${escapeHTML(formatDate(task.due_date))}</small>
                    </span>
                </label>
            `).join("") : `
                <div class="empty-state compact-empty">
                    <strong>${total ? "All caught up!" : "Your task list starts here"}</strong>
                    <p>${total ? "You have completed all your tasks." : "Add a task to organize your day."}</p>
                    <button class="text-button" type="button" data-action="add-task">Create a task</button>
                </div>`;
        }
    };

    const renderAppointments = () => {
        const container = $("#appointmentList");
        if (!container) return;

        const now = new Date();
        let appointments = [...state.appointments];

        if (state.appointmentFilter === "upcoming") {
            appointments = appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= now
            );
        } else if (state.appointmentFilter === "past") {
            appointments = appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) < now
            );
        }

        appointments.sort((a, b) =>
            `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
        );

        const count = $("#appointmentCount");
        if (count) count.textContent = `${appointments.length} appointment${appointments.length === 1 ? "" : "s"}`;

        if (!appointments.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>No appointments here</strong>
                    <p>Create an appointment to keep your healthcare schedule organized.</p>
                    <button class="button button-primary button-small"
                        type="button" data-action="open-appointment">Create appointment</button>
                </div>`;
        } else {
            container.innerHTML = appointments.map(item => `
                <article class="appointment-item">
                    <div class="appointment-date">
                        <strong>${escapeHTML(new Date(`${item.date}T12:00:00`).getDate())}</strong>
                        <span>${escapeHTML(new Intl.DateTimeFormat(undefined, {
                            month: "short"
                        }).format(new Date(`${item.date}T12:00:00`)))}</span>
                    </div>
                    <div class="appointment-item-content">
                        <strong>${escapeHTML(item.title)}</strong>
                        <p>${escapeHTML(item.category || "Appointment")} · ${escapeHTML(item.time || "")}</p>
                        ${item.provider ? `<small>${escapeHTML(item.provider)}</small>` : ""}
                        ${item.location ? `<small>${escapeHTML(item.location)}</small>` : ""}
                        ${item.notes ? `<small>${escapeHTML(item.notes)}</small>` : ""}
                    </div>
                    <button class="icon-button" type="button" data-action="delete-appointment"
                        data-id="${escapeHTML(item.id)}" aria-label="Delete appointment">×</button>
                </article>
            `).join("");
        }

        const metric = $("#metricAppointments");
        if (metric) {
            metric.textContent = state.appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= now
            ).length;
        }

        const overview = $("#overviewAppointmentList");
        if (overview) {
            const upcoming = state.appointments
                .filter(item => new Date(`${item.date}T${item.time || "23:59"}`) >= now)
                .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))
                .slice(0, 3);

            overview.innerHTML = upcoming.length ? upcoming.map(item => `
                <article class="compact-appointment-item">
                    <span class="compact-appointment-icon">+</span>
                    <span>
                        <strong>${escapeHTML(item.title)}</strong>
                        <small>${escapeHTML(formatDate(item.date))} · ${escapeHTML(item.time || "")}</small>
                    </span>
                </article>
            `).join("") : `
                <div class="empty-state">
                    <strong>No upcoming appointments</strong>
                    <p>Your saved appointments will appear here.</p>
                    <button class="button button-secondary button-small"
                        type="button" data-action="open-appointment">Add appointment</button>
                </div>`;
        }
    };

    const renderRecords = () => {
        const container = $("#recordsList");
        if (!container) return;

        const query = ($("#recordsSearch")?.value || "").toLowerCase().trim();
        const categories = ["all", "lab", "prescription", "imaging", "other"];

        const records = state.records.filter(record => {
            const category = (record.category || "other").toLowerCase();
            const categoryMatches = state.recordFilter === "all" ||
                category === state.recordFilter;
            const textMatches = `${record.name} ${record.file_name} ${category}`
                .toLowerCase().includes(query);
            return categoryMatches && textMatches;
        });

        $$("[data-record-filter]").forEach(button => {
            button.classList.toggle("active", button.dataset.recordFilter === state.recordFilter);
        });

        const count = $("#recordsTotal");
        const lab = $("#recordsLabCount");
        const prescriptions = $("#recordsPrescriptionCount");
        const navCount = $("#recordsNavCount");
        const metric = $("#metricRecords");

        if (count) count.textContent = state.records.length;
        if (lab) lab.textContent = state.records.filter(r => r.category === "lab").length;
        if (prescriptions) prescriptions.textContent = state.records.filter(r => r.category === "prescription").length;
        if (navCount) navCount.textContent = state.records.length;
        if (metric) metric.textContent = state.records.length;

        if (!records.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>${state.records.length ? "No matching records" : "Your medical library is ready"}</strong>
                    <p>${state.records.length ? "Try another search or filter." : "Upload a report or prescription to begin."}</p>
                    <button class="button button-primary button-small"
                        type="button" data-action="open-upload">Add a record</button>
                </div>`;
            return;
        }

        container.innerHTML = records.map(record => `
            <article class="record-item">
                <span class="record-icon">▤</span>
                <div class="record-item-content">
                    <strong>${escapeHTML(record.name || record.file_name)}</strong>
                    <p>${escapeHTML(record.category || "other")} · ${escapeHTML(formatDate(record.created_at))}</p>
                    <small>${escapeHTML(record.file_name || "")} · ${escapeHTML(formatSize(Number(record.size) || 0))}</small>
                </div>
                <span class="subtle-badge">${escapeHTML(record.status || "saved")}</span>
            </article>
        `).join("");
    };

    const renderMeals = () => {
        const container = $("#mealList") || $("#dietMealList");
        if (!container) return;

        const meals = state.meals.filter(meal => meal.date === today());

        container.innerHTML = meals.length ? meals.map(meal => `
            <article class="meal-item">
                <div>
                    <strong>${escapeHTML(meal.name)}</strong>
                    <p>${escapeHTML(meal.meal_time)} · ${escapeHTML(formatDate(meal.date))}</p>
                    ${meal.notes ? `<small>${escapeHTML(meal.notes)}</small>` : ""}
                </div>
                <button type="button" class="icon-button" data-action="delete-meal"
                    data-id="${escapeHTML(meal.id)}" aria-label="Delete meal">×</button>
            </article>
        `).join("") : `
            <div class="empty-state">
                <strong>No meals planned for today</strong>
                <p>Add meals to keep your routine organized.</p>
                <button type="button" class="button button-secondary button-small"
                    data-action="add-meal">Add a meal</button>
            </div>`;
    };

    const renderProfile = () => {
        const profile = state.profile;
        const name = profile.name || "Your profile";
        const nameElement = $("#topbarName");
        const avatar = $("#topbarAvatar");

        if (nameElement) nameElement.textContent = name;
        if (avatar) avatar.textContent = name === "Your profile" ? "U" : name.charAt(0).toUpperCase();

        $$("[data-profile-value]").forEach(element => {
            element.textContent = profile[element.dataset.profileValue] || "Not provided";
        });
    };

    const openProfileModal = () => {
        const profile = state.profile;

        openModal(
            "Your health profile",
            field("Full name", "name", "text", { value: profile.name || "" }) +
            field("Age", "age", "number", { min: 1, max: 120, value: profile.age || "" }) +
            field("Gender", "gender", "select", {
                choices: ["Prefer not to say", "Female", "Male", "Other"],
                value: profile.gender || "Prefer not to say"
            }) +
            field("Height (cm)", "height", "number", {
                min: 30, max: 260, step: "0.1", value: profile.height || ""
            }) +
            field("Weight (kg)", "weight", "number", {
                min: 1, max: 500, step: "0.1", value: profile.weight || ""
            }) +
            field("Allergies or notes", "notes", "textarea", {
                value: profile.notes || "",
                placeholder: "Optional. Only enter information you want stored in this browser."
            }),
            form => {
                state.profile = {
                    name: form.get("name").trim(),
                    age: form.get("age"),
                    gender: form.get("gender"),
                    height: form.get("height"),
                    weight: form.get("weight"),
                    notes: form.get("notes").trim()
                };

                persist();
                renderProfile();
                toast("Profile saved in this browser.");
            }
        );
    };

    const renderConsent = () => {
        $$("[data-consent]").forEach(input => {
            input.checked = Boolean(state.consent[input.dataset.consent]);
        });
    };

    const renderAll = () => {
        const date = $("#currentDate");
        if (date) {
            date.textContent = new Intl.DateTimeFormat(undefined, {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            }).format(new Date());
        }

        const analyses = $("#metricAnalyses");
        if (analyses) analyses.textContent = state.analyses.length;

        renderTasks();
        renderAppointments();
        renderRecords();
        renderMeals();
        renderProfile();
        renderConsent();
        renderMentorMessages();
    };

    const apiRequest = async (url, options = {}) => {
        let response;

        try {
            response = await fetch(url, options);
        } catch {
            throw new Error("Cannot connect to the Flask server. Make sure app.py is running.");
        }

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.error || data.message || `Request failed (${response.status}).`);
        }

        return data;
    };

    const analyzeReport = async () => {
        const fileInput = $("#reportFileInput");
        const file = fileInput?.files?.[0];

        if (!file) {
            toast("Choose a PDF or image first.", "warning");
            fileInput?.focus();
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            toast("The maximum file size is 10 MB.", "error");
            return;
        }

        const button = $("#analyzeReportButton");
        const resultsPanel = $("#analysisResultsPanel");
        const results = $("#analysisResults");
        const status = $("#analysisStatus");

        if (state.busy) return;
        state.busy = true;

        if (button) {
            button.disabled = true;
            button.textContent = "Analyzing report...";
        }

        if (resultsPanel) resultsPanel.hidden = false;
        if (status) status.textContent = "Processing";
        if (results) {
            results.textContent = "Reading your document and requesting an explanation...";
        }

        try {
            const body = new FormData();
            body.append("file", file);

            const type = $("#analysisType")?.value || "summary";
            const context = $("#analysisContext")?.value?.trim() || "";

            body.append("analysis_type", type);
            body.append("context", context);

            const data = await apiRequest("/api/analyze-report", {
                method: "POST",
                body
            });

            const answer = data.summary || data.analysis || data.message || "No analysis was returned.";

            state.analyses.unshift({
                id: id(),
                file_name: file.name,
                type,
                summary: answer,
                created_at: data.created_at || new Date().toISOString()
            });

            persist();

            if (results) {
                results.innerHTML = `
                    <div class="analysis-answer">
                        <h3>Report explanation</h3>
                        <div class="analysis-text">${escapeHTML(answer).replace(/\n/g, "<br>")}</div>
                        ${data.extracted_text ? `
                            <details>
                                <summary>Review extracted text</summary>
                                <pre>${escapeHTML(data.extracted_text)}</pre>
                            </details>` : ""}
                        <p class="medical-disclaimer">
                            Educational information only. Verify extracted values against the
                            original document and discuss results with a qualified professional.
                        </p>
                    </div>`;
            }

            if (status) status.textContent = "Complete";
            renderAll();
            toast("Report analysis completed.");
        } catch (error) {
            if (status) status.textContent = "Could not analyze";
            if (results) results.textContent = error.message;
            toast(error.message, "error");
        } finally {
            state.busy = false;
            if (button) {
                button.disabled = false;
                button.innerHTML = '<i data-lucide="sparkles"></i> Analyze report';
            }
            refreshIcons();
        }
    };

    const renderMentorMessages = () => {
        const container = $("#mentorMessages");
        if (!container || !state.messages.length) return;

        container.innerHTML = state.messages.map(message => `
            <article class="mentor-message ${message.role === "user" ? "mentor-message-user" : "mentor-message-assistant"}">
                <span class="message-avatar">${message.role === "user" ? "U" : "✦"}</span>
                <div class="message-content">
                    <span class="message-author">${message.role === "user" ? "You" : "NexHealth Mentor"}</span>
                    <p>${escapeHTML(message.content).replace(/\n/g, "<br>")}</p>
                </div>
            </article>
        `).join("");

        container.scrollTop = container.scrollHeight;
        refreshIcons();
    };

    const sendMentorMessage = async message => {
        const input = $("#mentorInput");
        const button = $("#mentorSendButton");
        const text = message.trim();

        if (!text) {
            toast("Enter a question first.", "warning");
            return;
        }

        if (text.length > 4000) {
            toast("Keep your message under 4,000 characters.", "warning");
            return;
        }

        if (state.busy) return;

        state.messages.push({ id: id(), role: "user", content: text });
        persist();
        renderMentorMessages();

        if (input) input.value = "";
        if (button) button.disabled = true;
        state.busy = true;

        try {
            const data = await apiRequest("/api/mentor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text })
            });

            const answer = data.reply || data.answer || data.response || data.message ||
            "The service did not return a response.";

            state.messages.push({
                id: id(),
                role: "assistant",
                content: answer
            });

            persist();
            renderMentorMessages();
        } catch (error) {
            state.messages.push({
                id: id(),
                role: "assistant",
                content: `I couldn't connect to the mentor service. ${error.message}`
            });

            persist();
            renderMentorMessages();
            toast(error.message, "error");
        } finally {
            state.busy = false;
            if (button) button.disabled = false;
            input?.focus();
        }
    };

    const clearMentor = () => {
        if (!confirm("Clear this conversation from this browser?")) return;

        state.messages = [];
        save(STORAGE.messages, state.messages);

        const container = $("#mentorMessages");
        if (container) {
            container.innerHTML = `
                <div class="mentor-message mentor-message-assistant">
                    <span class="message-avatar">✦</span>
                    <div class="message-content">
                        <span class="message-author">NexHealth Mentor</span>
                        <p>Conversation cleared. What general health question can I help you understand?</p>
                    </div>
                </div>`;
        }

        toast("Conversation cleared.");
    };

    const exportData = () => {
        const data = {
            exported_at: new Date().toISOString(),
            records: state.records,
            tasks: state.tasks,
            appointments: state.appointments,
            meals: state.meals,
            analyses: state.analyses,
            messages: state.messages,
            profile: state.profile,
            consent: state.consent
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json"
        });

        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `nexhealth-backup-${today()}.json`;
        anchor.click();
        URL.revokeObjectURL(url);

        toast("Export prepared.");
    };

    const deleteLocalData = () => {
        const confirmed = confirm(
            "Delete NexHealth data stored in this browser? This does not delete server files or remote data."
        );

        if (!confirmed) return;

        Object.values(STORAGE).forEach(key => localStorage.removeItem(key));

        state.records = [];
        state.tasks = [];
        state.appointments = [];
        state.meals = [];
        state.analyses = [];
        state.messages = [];
        state.profile = {};
        state.consent = {
            necessary: true,
            analytics: false,
            aiProcessing: false,
            healthcareSharing: false
        };

        renderAll();
        toast("Browser data deleted.");
    };

    const runSearch = query => {
        const value = query.trim().toLowerCase();
        if (!value) return;

        const routes = [
            ["overview", "overview"],
            ["medical-records", "medical-records"],
            ["records", "medical-records"],
            ["analyzer", "ai-analyzer"],
            ["report", "ai-analyzer"],
            ["diet", "diet-tasks"],
            ["task", "diet-tasks"],
            ["meal", "diet-tasks"],
            ["appointment", "appointments"],
            ["service", "health-services"],
            ["mentor", "ai-mentor"],
            ["privacy", "privacy-consent"]
        ];

        const match = routes.find(([word]) => value.includes(word));

        if (match) {
            navigate(match[1]);
            return;
        }

        navigate("medical-records");

        const search = $("#recordsSearch");
        if (search) {
            search.value = query;
            renderRecords();
        }
    };

    const bindEvents = () => {
        document.addEventListener("click", event => {
            const screenButton = event.target.closest("[data-screen]");

            if (screenButton) {
                event.preventDefault();
                navigate(screenButton.dataset.screen);
                return;
            }

            const promptButton = event.target.closest("[data-mentor-prompt]");
            if (promptButton) {
                navigate("ai-mentor");
                sendMentorMessage(promptButton.dataset.mentorPrompt);
                return;
            }

            const closeButton = event.target.closest("[data-close-modal]");
            if (closeButton) {
                closeModal();
                return;
            }

            const actionButton = event.target.closest("[data-action]");
            if (!actionButton) return;

            const action = actionButton.dataset.action;
            const itemId = actionButton.dataset.id;

            switch (action) {
                case "open-upload":
                    openUploadModal();
                    break;
                case "add-task":
                    openTaskModal();
                    break;
                case "open-appointment":
                    openAppointmentModal();
                    break;
                case "add-meal":
                    openMealModal();
                    break;
                case "toggle-task":
                    toggleTask(itemId);
                    break;
                case "delete-task":
                    removeTask(itemId);
                    break;
                case "delete-appointment":
                    deleteAppointment(itemId);
                    break;
                case "delete-meal":
                    state.meals = state.meals.filter(meal => meal.id !== itemId);
                    persist();
                    renderMeals();
                    toast("Meal removed.");
                    break;
                case "export-data":
                    exportData();
                    break;
                case "delete-local-data":
                    deleteLocalData();
                    break;
                case "edit-profile":
                    openProfileModal();
                    break;
                case "privacy-help":
                    toast("Privacy support is not connected to a support service yet.", "warning");
                    break;
            }
        });

        $("#mobileMenuButton")?.addEventListener("click", () => {
            const open = !document.body.classList.contains("sidebar-open");
            document.body.classList.toggle("sidebar-open", open);
            $("#mobileMenuButton").setAttribute("aria-expanded", String(open));
        });

        $("#sidebarOverlay")?.addEventListener("click", () => {
            document.body.classList.remove("sidebar-open");
        });

        $("#profileTrigger")?.addEventListener("click", openProfileModal);

        $("#notificationButton")?.addEventListener("click", () => {
            const pending = state.tasks.filter(task => !task.completed).length;
            const upcoming = state.appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= new Date()
            ).length;

            toast(`${pending} tasks remaining · ${upcoming} upcoming appointments`, "success");
        });

        $("#globalSearch")?.addEventListener("keydown", event => {
            if (event.key === "Enter") runSearch(event.target.value);
        });

        document.addEventListener("keydown", event => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                $("#globalSearch")?.focus();
            }

            if (event.key === "Escape") closeModal();
        });

        $("#recordsSearch")?.addEventListener("input", renderRecords);

        $$("[data-record-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.recordFilter = button.dataset.recordFilter;
                renderRecords();
            });
        });

        $$("[data-task-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.taskFilter = button.dataset.taskFilter;
                $$("[data-task-filter]").forEach(item =>
                    item.classList.toggle("active", item === button)
                );
                renderTasks();
            });
        });

        $$("[data-appointment-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.appointmentFilter = button.dataset.appointmentFilter;
                $$("[data-appointment-filter]").forEach(item =>
                    item.classList.toggle("active", item === button)
                );
                renderAppointments();
            });
        });

        $("#analyzeReportButton")?.addEventListener("click", analyzeReport);

        $("#reportFileInput")?.addEventListener("change", event => {
            const file = event.target.files?.[0];
            const selected = $("#selectedReportFile");

            if (!file) {
                if (selected) selected.hidden = true;
                return;
            }

            if (selected) selected.hidden = false;
            if ($("#selectedFileName")) $("#selectedFileName").textContent = file.name;
            if ($("#selectedFileSize")) $("#selectedFileSize").textContent = formatSize(file.size);
        });

        $("#removeSelectedFile")?.addEventListener("click", () => {
            if ($("#reportFileInput")) $("#reportFileInput").value = "";
            if ($("#selectedReportFile")) $("#selectedReportFile").hidden = true;
        });

        const dropzone = $("#reportDropzone");

        if (dropzone) {
            dropzone.addEventListener("dragover", event => {
                event.preventDefault();
                dropzone.classList.add("drag-over");
            });

            dropzone.addEventListener("dragleave", () => {
                dropzone.classList.remove("drag-over");
            });

            dropzone.addEventListener("drop", event => {
                event.preventDefault();
                dropzone.classList.remove("drag-over");

                const file = event.dataTransfer?.files?.[0];
                if (!file || !$("#reportFileInput")) return;

                const transfer = new DataTransfer();
                transfer.items.add(file);
                $("#reportFileInput").files = transfer.files;
                $("#reportFileInput").dispatchEvent(new Event("change", { bubbles: true }));
            });
        }

        $("#mentorForm")?.addEventListener("submit", event => {
            event.preventDefault();
            sendMentorMessage($("#mentorInput")?.value || "");
        });

        $("#clearMentorButton")?.addEventListener("click", clearMentor);

        $$("[data-consent]").forEach(input => {
            input.addEventListener("change", () => {
                state.consent[input.dataset.consent] = input.checked;
                persist();
                toast("Preference saved in this browser.");
            });
        });

        $("#exportDataButton")?.addEventListener("click", exportData);
        $("#deleteLocalDataButton")?.addEventListener("click", deleteLocalData);
        $("#editProfileButton")?.addEventListener("click", openProfileModal);
    };

    const init = async () => {
        bindEvents();
        renderAll();
        navigate("overview");

        try {
            const health = await apiRequest("/api/health");

            if (!health.ai_configured) {
                console.warn("NexHealth: OPENROUTER_API_KEY is not configured.");
            }
        } catch (error) {
            console.warn("NexHealth backend health check failed:", error.message);
        }

        refreshIcons();
        console.info("NexHealth initialized.");
    };

    return {
        init,
        navigate,
        renderAll,
        exportData,
        deleteLocalData
    };
})();

document.addEventListener("DOMContentLoaded", NexHealth.init);

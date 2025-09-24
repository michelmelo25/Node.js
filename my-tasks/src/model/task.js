
export class Task {
    constructor(id, title, description, completed_at = null, created_at = null, updated_at = null) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed_at = completed_at;
        this.created_at = created_at ?? new Date('2025-09-22').toDateString();
        this.updated_at = updated_at;
    }

    ToJson() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            completed_at: this.completed_at,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

    complete() {
        this.completed_at = new Date().toDateString();
        this.updated_at = new Date().toDateString();
    }

    uncomplete() {
        this.completed_at = null;
        this.updated_at = new Date().toDateString();
    }

    update({ title, description }) {
        if (title) this.title = title;
        if (description) this.description = description;
        this.updated_at = new Date().toDateString();
    }

    static fromJson(json) {
        return new Task(
            json.id,
            json.title,
            json.description,
            json.completed_at,
            json.created_at,
            json.updated_at
        )
    }
}
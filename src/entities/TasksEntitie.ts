interface TasksProps {
    title: string,
    description: string,
    dificulty: number,
    status?: false,
    createdAt: Date,
    updatedAt: Date,
    endsAt: Date
}

export class Tasks {
    private props: TasksProps

    get title() {
        return this.props.title
    }

    get description() {
        return this.props.description
    }

    get dificulty() {
        return this.props.dificulty
    }

    get status() {
        return this.props.status
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    constructor(props: TasksProps) {
        const { title, description, dificulty, status, createdAt, updatedAt, endsAt } = props

        if (title == ' ' || description == ' ' || dificulty == 0)
            throw new Error('Invalid input')

        if(endsAt == createdAt)
            throw new Error('Invalida date')

        this.props = props
    }
}
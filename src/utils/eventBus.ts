class EventBus {
    private bucket: Map<string, Set<Function>>
    static instance: EventBus | null

    constructor() {
        this.bucket = new Map()
    }

    static getInstance() {
        if (!EventBus.instance)
            EventBus.instance = new EventBus()

        return EventBus.instance
    }

    on(message: string, listener: Function) {
        const sub = this.bucket.get(message)

        if (!sub) {
            const subSet = new Set() as Set<Function>
            subSet.add(listener)

            this.bucket.set(message, subSet)

            return
        }

        sub.add(listener)
    }

    emit(message: string, data?: any) {
        for (const [key, subs] of this.bucket) {
            if (key === message)
                subs.forEach(sub => sub(data))
        }
    }

    off(messageOrListener: string | Function) {
        if (typeof messageOrListener === 'function') {
            let deleteKey = ''

            for (const [key, subs] of this.bucket) {
                const subIndex = [...subs].findIndex(sub => sub.name === messageOrListener.name)

                if (subIndex !== -1)
                    subs.delete(messageOrListener)

                if (subs.size === 0)
                    deleteKey = key
            }

            if (deleteKey)
                this.bucket.delete(deleteKey)
        }
        else {
            this.bucket.delete(messageOrListener)
        }
    }

    clear() {
        this.bucket.clear()
    }
}

export const eventBus = EventBus.getInstance()

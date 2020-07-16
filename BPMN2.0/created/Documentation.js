export default class Documentation {
    constructor(data) {
        if (!data) return;

        this.source = data.source;
        this.xml:lang = data['xml:lang'];
    }

    toString() {
        return JSON.stringify(this, null, 4);
    }
}
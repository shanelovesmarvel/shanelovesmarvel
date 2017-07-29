export class Actor {
    public name: string;
    public nationality: string;
    public best: string;

    constructor(name: string, nationality: string) {
        this.name = name;
        this.nationality = nationality;
    }
    @Best("Titanic")
    get bestMovie(): string {
        return this.best;
    }
    
    set bestMovie(movie: string) {
        this.best = `Best movie is ${movie}.`;
    }
    
    static creed(): string {
        return "Life is like a drama.";
    }

    protected favouriteActress(): string {
        return "this is a screet.";
    }
}

export class Actress extends Actor {
    constructor(name: string, nationality: string) {
        super(name, nationality);
    }
}

// method decorator
function Best(movie: string) {
    return (target: any, name: string, descriptor: any) => {
        target.bestMovie = movie;
        console.info(target.bestMovie);
        return descriptor;
    };
}
class Jedi {
    jump () {
        this.jumping = true;
        return this;
    }

    setHeight ( height ) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

console.log(
    luke.jump()
        .setHeight( 20 )
);

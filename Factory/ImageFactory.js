class Image{
    constructor(){
        this.width = ""
        this.height = ""
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }
}

class JPGImage extends Image{}

class PNGImage extends Image{}

class GIFImage extends Image{}

function createImage(type){

    const suportedImages = {
        jpg: JPGImage,
        png: PNGImage,
        gif: GIFImage   
    }

    return new (suportedImages[type] || Image)();
}

module.exports = {
    createImage,
    Image
}
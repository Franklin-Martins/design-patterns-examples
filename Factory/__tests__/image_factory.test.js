const { createImage, Image } = require('../ImageFactory')

describe('Image Factory', ()=>{

    it('should create a instance of JPG given the type JPG', ()=>{
        const ImageInstance = createImage('jpg')
        expect(ImageInstance).toBeInstanceOf(Image)
    })

})
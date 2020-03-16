import React from "react";
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";

const PhotoSliderDesktop = ({ images }) => {
    console.log(images);
    if (images) {
        const titledImages = images.map((img) => {
            return (
                <div key={img.id} className="col-12 col-md-5 offset-md-1">
                    <RenderImage image={img} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {titledImages}
                </div>
            </div>
        );

    } else {
        return null;
    }
};

/**
 * @return {null}
 */
function RenderImage({ image }) {

    if (!image) {
        return null;
    } else {
        console.log(image.src);
        return (
            <Card>
                <CardBody>
                    <CardTitle className="cases-image-title"><b>{image.title}</b></CardTitle>
                    <CardImg width="100%" src={image.src} alt={image.name} />
                </CardBody>
            </Card>
        )
    }
}


export default PhotoSliderDesktop;
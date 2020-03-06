import React from "react";
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";


const CasesImages = ({images}) => {
    if (images) {
        const titledImages = images.map((img) => {
            return (
                <div key={img.id} className="col-12 col-md-5">
                    <RenderImage image={img}/>
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
        return (
            <div> </div>
        );
    }
};

function RenderImage({image}) {

    if (image) {
        return (
            <div className="">
                <Card>
                    <CardBody>
                        <CardTitle className="cases-image-title">{image.title}</CardTitle>
                        <CardImg width="100%" src={image.src} alt={image.name}/>
                    </CardBody>
                </Card>
            </div>
        )
    } else {
        return (
            <div> </div>
        )
    }
}


export default CasesImages;
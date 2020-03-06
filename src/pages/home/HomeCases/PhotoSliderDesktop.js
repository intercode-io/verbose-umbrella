import React from "react";
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";


const CasesImages = ({props}) => {
    const titledImages = props.images.map((img) => {
        return (
            <div key={img.id} className="col-12 col-md-5 m-1">
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
};

function RenderImage({image}) {
    if (image) {
        console.log(image);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={image.image} alt={image.name}/>
                            <CardBody>
                                <CardTitle>{image.title}</CardTitle>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>123</div>
        )
    }
}


export default CasesImages;
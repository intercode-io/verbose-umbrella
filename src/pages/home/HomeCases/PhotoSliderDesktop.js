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

    }
    else {
        return (
            <div>NOPE</div>
        );
    }
};

function RenderImage({image}) {
    // const titledImages = images.map((img) => {
    //     return (
    //         <div key={img.id} className="col-12 col-md-5 m-1">
    //             <RenderImage image={img}/>
    //         </div>
    //     );
    // });
    //
    // return (
    //     <div className="container">
    //         <div className="row">
    //             {titledImages}
    //         </div>
    //     </div>
    // );

    if (image) {
        console.log(image);

        return (
            <div className="container">
                <div className="row">
                    <div className="">
                        <Card>
                            <CardBody>
                                <CardTitle className="cases-image-title">{image.title}</CardTitle>
                                <CardImg width="100%" src={image.src} alt={image.name}/>
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
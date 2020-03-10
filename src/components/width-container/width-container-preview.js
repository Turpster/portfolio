import React from 'react';
import WidthContainer from "./width-container";
import Paragraph from "../text/paragraph/paragraph";
import Heading from "../text/heading/heading";

export default class WidthContainerPreview extends React.Component
{
    render() {
        return (
            <WidthContainer>
                <Heading level={1}>Width Contained Paragraph</Heading>
                <Paragraph>
                    Sed volutpat lorem eget velit maximus, et semper enim maximus. Donec euismod ornare ante eget
                    aliquam. Ut at hendrerit dui. Nunc facilisis elit sed arcu laoreet aliquet. Ut condimentum nulla
                    quis erat hendrerit, sed mollis leo aliquet. Donec id elementum sapien. Aenean quam sem, pretium id
                    aliquam vel, interdum vitae lorem. Quisque metus est, varius a interdum in, mollis quis quam. Nulla
                    placerat imperdiet elit, vel malesuada diam tincidunt sed. Ut sem nisi, rutrum sit amet interdum ut,
                    maximus vitae leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Maecenas neque eros, gravida ut erat ut, venenatis fermentum massa. Sed sed tristique lacus.
                    Proin gravida felis vitae semper volutpat. Cras egestas felis ut tortor luctus, vel sodales elit
                    fringilla.
                </Paragraph>
                <Paragraph>
                    Mauris faucibus nunc id aliquet luctus. Pellentesque diam enim, lobortis non quam non, aliquam
                    ultrices arcu. Aliquam erat volutpat. Curabitur non pulvinar mauris. Maecenas non ipsum a neque
                    commodo cursus. Vestibulum ultrices felis sit amet faucibus pretium. Fusce ut neque justo.
                </Paragraph>
                <Paragraph>
                    Curabitur sed convallis velit, sit amet eleifend nisl. Quisque et lorem vel ligula facilisis
                    convallis et vitae ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Aliquam ut placerat massa, ut luctus justo. Aliquam erat volutpat. Nulla
                    nunc neque, egestas vel maximus ut, efficitur ut ex. Fusce in massa dapibus, fringilla turpis sit
                    amet, posuere lorem. Suspendisse condimentum consequat tempor. Sed nec volutpat mi. Ut faucibus,
                    enim vel sagittis molestie, mi quam fermentum est, vitae lacinia lorem mi a neque. Fusce id ultrices
                    purus. Donec ut dignissim dolor. Quisque viverra scelerisque aliquam. Sed id risus in elit commodo
                    luctus. In suscipit dolor sed elit blandit aliquet.
                </Paragraph>
                <Paragraph>
                    Cras eu ultrices eros. Nullam auctor erat sit amet dolor congue ullamcorper. Nulla aliquam nibh in
                    ante fermentum, venenatis viverra odio gravida. Maecenas porttitor euismod vestibulum. Vivamus
                    molestie ex et blandit suscipit. Morbi eu leo vulputate turpis placerat porta vitae id turpis.
                    Curabitur dictum, neque eu fermentum placerat, felis nunc aliquet urna, eu pulvinar nibh mauris ut
                    dui. Vestibulum at consequat leo. Suspendisse eget maximus purus. Donec finibus eget nunc ut
                    faucibus. Donec lobortis neque tortor, nec tristique tellus lacinia vel. Cras vulputate leo in
                    dolor pharetra consectetur. Proin lobortis sem risus, in malesuada orci malesuada quis.
                </Paragraph>
                <Paragraph>
                    Mauris faucibus nunc id aliquet luctus. Pellentesque diam enim, lobortis non quam non, aliquam
                    ultrices arcu. Aliquam erat volutpat. Curabitur non pulvinar mauris. Maecenas non ipsum a neque
                    commodo cursus. Vestibulum ultrices felis sit amet faucibus pretium. Fusce ut neque justo.
                </Paragraph>
            </WidthContainer>
        )
    }
}
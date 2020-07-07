import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
} from 'react-native';

interface Props {
    width: number;
    source: any
}

const ImageScalable = ({ width, source }: Props) => {

    const [imgHeight, setImgHeight] = useState<number>(0);

    useEffect(() => {

        if (width <= Image.resolveAssetSource(source).height) {
            setImgHeight(Image.resolveAssetSource(source).height * (width / Image.resolveAssetSource(source).width));
        } else {
            setImgHeight(width);
        }
    }, [source]);

    return (
        <View
            style={{
                flex: 1,
                width: width,
                height: imgHeight,
                borderRadius: 8,
                overflow: 'hidden',

            }}
        >
            <Image
                source={source}
                style={{
                    flex: 1,
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                }}
            />
        </View>
    )
}


export default ImageScalable;
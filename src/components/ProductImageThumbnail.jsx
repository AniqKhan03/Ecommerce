import React from 'react'

function ProductImageThumbnail({ image, selected, setMainImg }) {
    let selectedStyle = ''
    if (selected) {
        selectedStyle = 'selected'
    }

    function handleClick(e) {
        setMainImg(e.target.src)
    }

    return (
        <figure className={`hover:border-b hover:border-black w-20 cursor-pointer ${selected ? "border-b-2 border-gray-600" : '' }`} id={selectedStyle}>
            <img src={image} alt="" className="" onClick={handleClick}/>
        </figure>
    );
}

export default ProductImageThumbnail
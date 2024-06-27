import React, { useReducer } from 'react';
import styled from 'styled-components';

const initialstate = {
    currentimageindex: 0
};

const imagereducer = (state, action) => {
    switch (action.type) {
        case 'previous':
            return { ...state, currentimageindex: Math.max(state.currentimageindex - 1) };
        case 'next':
            return { ...state, currentimageindex: Math.min(state.currentimageindex + 1) };
        default:
            return state;
    }
};

const images = [
    'https://imgs.search.brave.com/xQAhudkDFaAbUPnGchQK7mpATTPtab0B00dpXvDkEBs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMjE1Nzk2NDU0/NS5qcGc',
    'https://imgs.search.brave.com/AwK9aiwQimhG5yHRVLhad04K5xlFDCQqoIxR6wtB9wk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ncmF0/aXNvZ3JhcGh5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMS9ncmF0aXNv/Z3JhcGh5LXN3ZWV0/LWtpY2tzLTgwMHg1/MjUuanBn',
    'https://via.placeholder.com/300?text=Image+3',
    'https://imgs.search.brave.com/yj4wDYOckLC4zwdsR7hhaGGxzJBo4bh9Jg9J3ODRBLw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ncmF0/aXNvZ3JhcGh5LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMy9ncmF0aXNv/Z3JhcGh5LXZyLWds/YXNzZXMtODAweDUy/NS5qcGc',
    'https://imgs.search.brave.com/ekd9-TjqL4YOYHaJP8hM_avcC9oCrD4tARI4_15n3iY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/cmVkLWZvaWxlZC1o/ZWFydHMtb24tYS1w/aW5rLWJhY2tncm91/bmQuanBnP3dpZHRo/PTEwMDAmZm9ybWF0/PXBqcGcmZXhpZj0w/JmlwdGM9MA'
];

const Container = styled.div`
    text-align: center;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2em;
    color: #333;
`;

const ImageWrapper = styled.div`
    margin: 20px 0;
`;

const Image = styled.img`
    width: 300px;
    height: auto;
    border: 2px solid #ddd;
    border-radius: 10px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background-color: ${props => props.bgColor || 'blue'};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.hoverColor || 'darkblue'};
    }

    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`;

const ImageGallery = () => {
    const [state, dispatch] = useReducer(imagereducer, initialstate);
    const { currentimageindex } = state;

    return (
        <Container>
            <Title>Image Gallery</Title>
            <ImageWrapper>
                <Image src={images[currentimageindex]} alt={`Image ${currentimageindex + 1}`} />
            </ImageWrapper>
            <ButtonGroup>
                <Button 
                    onClick={() => dispatch({ type: 'previous' })} 
                    disabled={currentimageindex === 0} 
                    bgColor="blue" 
                    hoverColor="darkblue"
                >
                    Previous
                </Button>
                <Button 
                    onClick={() => dispatch({ type: 'next' })} 
                    disabled={currentimageindex === images.length - 1} 
                    bgColor="green" 
                    hoverColor="darkgreen"
                >
                    Next
                </Button>
            </ButtonGroup>
        </Container>
    );
};

export default ImageGallery;

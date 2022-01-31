import React,  { useState } from 'react';

//Importing Modal
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

function ModalSection(props) {
    const [isOpen, setIsOpen] = useState(false)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isOpen: false
    //     };
    //     this.openModal.bind(this) // In class based components, 'bind' binds the methods you pass to other components  
    // }
    
    const openModal = () => setIsOpen(!isOpen) 
    // openModal() {
    //     this.setState({ isOpen: true })
    // }


    return (
        <React.Fragment>
            <ModalVideo channel={channel} isOpen={isOpen} videoId={videoId} onClose={() => {setIsOpen(false)}} />
        </React.Fragment>
    );
    
}

export default ModalSection;
import React from 'react'

import { Modal } from 'bootstrap'


class PaymentModal extends React.Component () {


constructor (){
    super()
    this.state = {
        show:false
    }
}


handleModal(){
    this.setState({show:!this.state.show})
}
  rendor(){

      return (
        <div>


 <Modal show={this.state.show} onHide ={() => {this.handleModal()}} >   
  
  <Modal.Header closeButton> Head part </Modal.Header>
  <Modal.Body> Body part </Modal.Body>
  <Modal.Footer> 
   <button className="btn" onClick={() => {this.handleModal()}}  > Close </button>
    </Modal.Footer>
 
 </Modal>
        </div>
      )
}

}
export default PaymentModal
import React, { useState, Component } from 'react';
import Image from 'react-bootstrap/Image';
import { MDBRow } from 'mdbreact';

import logoviku from '../../images/biglogo.png';

class PetukhovaLogo extends Component {
	render() {
		return (
			<MDBRow className="mb-0">
				<div className="page-logo-wrapper pt-3 col-md-12 text-center">
					<a href="#/">
						<Image src={logoviku} fluid alt="VIKU Logo" />
					</a>
				</div>

				<h3 className="text-center col-md-12 m-0">Единна вътрешна система за заявки и поръчки.</h3>
			</MDBRow>
		);
	}
}

export default PetukhovaLogo;

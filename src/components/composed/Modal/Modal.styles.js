import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";
import Colors from "theme/Colors";

export const ModalBlock = styled.div`
	align-items: center;
	bottom: 0;
	justify-content: center;
	left: 0;
	overflow: hidden;
	padding: 0.4rem;
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	opacity: 1;
	z-index: 400;
`;

export const ModalOverlay = styled.a`
	background: rgba(0, 0, 0, 0.75);
	bottom: 0;
	cursor: default;
	display: block;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
`;

export const ModalClose = styled.a`
	float: left !important;
	text-decoration: none !important;
	cursor: pointer;
	font-size: 1rem;
	color: ${Colors.lightGray};
	font: normal normal normal 1rem Arial;
`;

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 95vh;
	max-width: 850px;
	min-width: 25%;
	padding: 0 1.5rem;
	animation: ${keyframes`${fadeIn}`} 0.5s;
	z-index: 1;
	background: ${Colors.white} 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border-radius: 12px;
	opacity: 1;
`;

export const ModalBody = styled.div`
	overflow-y: auto;
	padding: 22px 0px;
	position: relative;
	font-family: Arial;
	font-size: 1rem;
`;

export const ModalHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: #303742;
	padding: 20px 0px 10px 0px;
	border-bottom: 1px solid ${Colors.lightGray};
`;

export const ModalTitle = styled.span`
	font-size: 5px;
	font-weight: 500;
	color: ${(props) => (props.colorModalTitle ? props.colorModalTitle : Colors.darkRed)};
	font: normal normal bold 24px/20px Arial;
	padding-left: 0px;
`;

export const ModalFooter = styled.div`
	padding: 10px 0px;
	text-align: right;
	border-top: 1px solid ${Colors.lightGray};
`;

export const Button = styled.button`
	background: ${Colors.darkBlue};
	color: ${Colors.white};
	font-size: 1em;
	font-family: Arial;
	margin: 10px;
	padding: 5px 10px;
	border: 2px solid ${Colors.darkBlue};
	border-radius: 3px;
	cursor: pointer;
`;

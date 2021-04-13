import styled from "styled-components";

export const Card = styled.div`
	width: 90%;
	min-height: calc(90vh - 10rem - 120px);
	box-shadow: 0px 3px 6px #00000029;
	border: 1px solid #dddddd;
	border-radius: 6px;
	overflow: hidden;
`;

export const CardHeader = styled.div`
	height: auto;
	background-color: #e22e2e;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0.5rem 1rem;
	}
`;

export const CardTitle = styled.h2`
	font: normal normal normal 16px/18px Arial;
	color: white;
`;

export const CardSelector = styled.select`
	margin-right: 12px;
	width: 94px;
	height: 35px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 6px #00000029;
	border: none;
	border-radius: 4px;
	color: #e22e2e;
	font: normal normal normal 16px/18px Arial;
`;

export const Chart = styled.div`
	padding: 20px;
	width: 100%;
	height: 100%;
`;

export const CardSelectorWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const CardOpenModal = styled.button`
	border-radius: 90px;
	background: #ffffff;
	border: none;
	height: 35px;
	width: 35px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #e22e2e;
`;

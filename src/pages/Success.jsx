import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const Success = () => {
	const location = useLocation();
	console.log(location)
	return <Container>Successful</Container>;
};

export default Success;

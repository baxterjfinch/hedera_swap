import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from "../UI/Card";
import {getCompiled, getCall} from "../../redux/modules/compiler";
import Button from "@material-ui/core/Button";


export default function CompiledContracts(props) {
	const dispatch = useDispatch()

	const { Settings, Compiled } = useSelector(state => state)
	const recompileContracts = () => {
		dispatch(getCompiled())
	}

	const callContract = () => {
		let body = {
			contract: "0.0.283823",
			callMethod: "hederaStringer"
		}
		dispatch(getCall(body))
	}

	useEffect(() => {
	},[])

	return (
		<Card>
		
		</Card>
	)
}
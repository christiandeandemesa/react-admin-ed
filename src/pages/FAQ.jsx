import {
	useTheme,
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography
} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';

import Header from '../components/Header';

import {tokens} from '../theme';

function FAQ() {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{m: '20px'}}>
			<Header title='FAQ' subtitle='Frequently Asked Questions' />

			{/* Accordion Questions */}
			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #1</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[500]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #2</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[500]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #3</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[500]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMore />}>
					<Typography variant='h5'>Important Question #4</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{color: colors.greenAccent[500]}}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius ipsam
						sapiente aliquam doloribus tempora ratione nobis. Nobis aliquam sint
						corporis veritatis ducimus eos, laborum quasi dolorum numquam magni, tempora
						autem maiores facilis mollitia repudiandae sequi nulla quos explicabo
						aspernatur consectetur quibusdam eius. Beatae aspernatur exercitationem
						quisquam culpa, consectetur illum.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
}

export default FAQ;

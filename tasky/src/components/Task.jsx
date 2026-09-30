import { blue, green } from "@mui/material/colors";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import Tooltip from "@mui/material/Tooltip";
import { ThemeProvider, createTheme } from "@mui/material";

const Task = (props) => {

    return (
        <ThemeProvider
          theme={createTheme({
            breakpoints: {
              values: {
                laptop: 1024,
                tablet: 640,
                mobile: 0,
              },
            },
          })}
        >
            <Grid
            key={props.id}
            size={{mobile: 12, tablet: 6, laptop: 4}}
            >
                <Card
                    sx={{
                        backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                        padding: '20px'
                    }}
                >
                    <CardHeader
                        title={props.title}
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '3px',
                            padding: '20px',
                            textAlign: 'center'
                        }}
                    />    
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2,
                                padding: '20px'
                            }}
                        >
                            <Typography
                                component="p"
                                variant="subtitle2"
                                color="text.primary"
                            >
                                Due: {props.deadline}
                            </Typography>
                        </Box>
                        <Typography
                            component="p"
                            variant="subtitle1"
                            align="center"
                            sx={{ fontStyle: 'italic' }}
                        >
                            {props.description}
                        </Typography>
                    </CardContent>
                    <CardActions
                        sx={{
                            justifyContent: 'space-between',
                            padding: '20px'
                        }}
                    >
                        <Tooltip title="Mark as Done">
                            <Button
                                variant="contained"
                                size="small"
                                color="success"
                                onClick={props.markDone}
                            >
                                <DoneIcon/> Done
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete Task (Cant Be Undone)">
                            <Button
                                variant="contained"
                                size="small"
                                color="error"
                                onClick={props.deleteTask}
                            >
                                <DeleteIcon/> Delete
                            </Button>
                        </Tooltip>
                    </CardActions>
                </Card>
            </Grid>
        </ThemeProvider>
    )
}

export default Task;

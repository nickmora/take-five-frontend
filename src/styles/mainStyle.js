import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
        "& .card": {
            padding: theme.spacing(3),
            margin: theme.spacing(1),
        },
        "& .project-img": {
            maxWidth: "100%",
        },
    },
    Footer: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.getContrastText(theme.palette.secondary.dark)
    },
    TechStack:{
        "& img":{
            height: "50px",
            maxWidth: "100%",
            margin: theme.spacing(1)
        }
    },
    Contact:{
        "& .lineBreak":{
            marginBottom: theme.spacing(7)
        }
    }
}))

export default useStyles


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 500,
    },
});

export default function MediaCard(props) {
    const location = useLocation();
    const [liked, setLiked] = useState(false)
    useEffect(() => {
        if (location.pathname == '') {
            setLiked(true)
        }
    }, [])
    const classes = useStyles();
    const handleSave = async () => {
        
        setLiked(false)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image_url}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.synopsis}

                    </Typography>
                </CardContent>
            </CardActionArea>
            {     !liked && <CardActions>
                <Button size="small" color="primary" onChange={handleSave}>
                    Save
        </Button>
            </CardActions>}
        </Card>
    );
}
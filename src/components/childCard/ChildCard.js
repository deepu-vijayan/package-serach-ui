import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';

function ChildCard(prop) {
    return (
        <div>
            <Card variant="outlined">
                <CardContent>

                    <Typography variant="h4" component="h2">
                        {prop.value}
                    </Typography>

                    <Typography variant="h5" component="p">
                        {prop.title}

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
export default ChildCard;
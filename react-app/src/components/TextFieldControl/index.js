import * as React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, withStyles } from "@material-ui/core";
import * as classnames from "classnames";

class TextFieldControl extends React.Component {
    render() {
        const {
            classes,
            label,
            multiline,
            rowsMax,
            rows,
            input: { name, onChange, value, ...restInput },
            meta,
            min,
            variant,
            onchange,
            readonly,
            resizeY,
            autoComplete,
            ...rest
        } = this.props;

        // `InputLabelProps` required since `restInput` override `onFocus` action
        return (
            <TextField
                {...rest}
                classes={{
                    root: classnames(classes.root, resizeY ? classes.resizeY : ""),
                }}
                fullWidth={true}
                label={label}
                value={value}
                name={name}
                helperText={meta.touched ? meta.error || meta.submitError : undefined}
                error={(meta.error || meta.submitError) && meta.touched}
                InputProps={{
                    autoComplete: autoComplete,
                    readOnly: readonly,
                    inputProps: min ? { min } : {},
                    classes: label
                        ? {}
                        : {
                            multiline: classes.input,
                            inputMarginDense: multiline ? undefined : classes.input,
                        },
                }}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    ...restInput,
                    "data-cy": name,
                }}
                // tslint:disable-next-line: no-any
                onChange={e => {
                    onChange(e);
                    if (onchange) {
                        onchange(e);
                    }
                }}
                multiline={multiline}
                rows={rows}
                rowsMax={rowsMax}
                margin={multiline ? "normal" : "dense"}
                variant={variant ? variant : "filled"}
            />
        );
    }
}

const styles = createStyles({
    root: {
        width: "100%",
        marginTop: 0,
        marginBottom: 0,
    },
    input: {
        padding: 6,
    },
    resizeY: {
        "& textarea": {
            resize: "vertical",
        },
    },
});

export default withStyles(styles)(TextFieldControl);

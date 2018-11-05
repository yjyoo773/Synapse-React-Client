import React from "react";
import ColorGradient from "./ColorGradient";

type MenuState = {
    currentFacet: string
};

type Props = {
    isChecked: object,
    updateParentFilter: (param: string) => void,
    executeInitialQueryRequest: () => void,
    data: any,
    rgbIndex: number,
    filter: string
}

type Info = {
    isSelected: boolean,
    originalColor: string,
    textColor: string
}

type Data = {
    columnName: string
}

// will take in a default facet  originalColor: "#F5F5F5"
export default class Menu extends React.Component<Props, MenuState> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleHoverLogic = this.handleHoverLogic.bind(this);
        this.state = {
            currentFacet: ""
        };
    }
    handleClick = (columnName: string) => (event: React.SyntheticEvent) => {
        this.setState({
            currentFacet: columnName
        });
        // below we make a slight optimization when switching between menu tabs,
        // that is, deciding whether the query result has to be reset or not, this
        // is made by seeing if any of the chicklets are selected, if any of them
        // are then we make the query request, otherwise not.
        let { isChecked } = this.props;
        let hasChickletsSelected = false;
        for (let key in isChecked) {
            if (isChecked.hasOwnProperty(key)) {
                hasChickletsSelected = true;
            }
        }
        this.props.updateParentFilter(columnName);
        if (hasChickletsSelected) {
            this.props.executeInitialQueryRequest();
        }
    };
    handleHoverLogic = (info: Info) => (event: React.MouseEvent<HTMLDivElement>) => {
        if (!info.isSelected && event.currentTarget.tagName === "DIV") {
            event.currentTarget.style.backgroundColor = info.originalColor;
            event.currentTarget.style.color = info.textColor;
        }
    };
    render() {
        let { data } = this.props;
        if (data.length === 0) {
            return false;
        }
        const colorGradient = new ColorGradient(this.props.rgbIndex);
        const originalColor = colorGradient.getOriginalColor();
        return (
            <React.Fragment>
                {data.facets.map((el: Data) => {
                    let style: any = {};
                    let selection = this.state.currentFacet ? this.state.currentFacet : this.props.filter;
                    let isSelected = selection === el.columnName;
                    let active = "";
                    if (isSelected) {
                        style.background = originalColor;
                        // below has to be set so the pseudo element created will inherit its color
                        // appropriately
                        style.borderLeftColor = originalColor;
                        style.color = "white";
                        active = "SRC-pointed";
                    } else {
                        style.background = "#F5F5F5";
                    }
                    style.width = "100%";
                    let infoEnter: Info = {isSelected, originalColor, textColor: "white"}
                    let infoLeave: Info = {isSelected,  originalColor: "#F5F5F5" ,textColor: "black"}
                    return (
                        <div
                            onMouseEnter={this.handleHoverLogic(infoEnter)}
                            onMouseLeave={this.handleHoverLogic(infoLeave)}
                            key={el.columnName}
                            className={`SRC-menu SRC-hand-cursor SRC-menu-hover SRC-text-chart ${active} ${active} ${isSelected ? "SRC-whiteText" : ""}`}
                            onClick={this.handleClick(el.columnName)}
                            style={style}
                        >
                            {el.columnName}
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

import React from "react";

const List = props => {
    // console.log(props.dogBreeds);
    return (
        <React.Fragment>
        <aside className="gds-persist-nav__sidebar" data-sidebar="">
            <ul className="gds-persist-nav__top-nav">
                {Object.entries(props.dogBreeds).map(([key,value]) => {
                    return (
                        <li className="gds-persist-nav__item" id={key} key={key}>
                        <a href="#" className="gds-persist-nav__link" onClick={props.handleClick} id={key}>{key}</a>

                        {/* If value.length > 0, do this */}
                        { value.length > 0 ? (
                            <React.Fragment>
                                {value.map((sub) => {
                                    // console.log(sub);
                                    return (
                                        <ul className="gds-persist-nav__sub-nav">
                                            <li className="gds-persist-nav__sub-item" id={sub} key={sub}>
                                                <a href="#" className="gds-persist-nav__link" onClick={props.handleClick} id={sub}>
                                                    {sub}
                                                </a>
                                            </li>
                                        </ul>
                                    );
                                })}
                            </React.Fragment>
                            )
                            // If not, then don't do anything
                            :
                            null
                        }
                        </li>
                    );
                })}
            </ul>
        </aside>
        <div className="gds-persist-nav__mobile-close" data-sidebar-toggle="" onClick={props.closeMenu}></div>
        </React.Fragment>
    );
};

export default List;
import React, { Component } from 'react'
import { TabMenu } from 'primereact/tabmenu';
import { withRouter } from 'react-router-dom';

interface MyState {
    activeItem: { label: string, icon: string },
    routerLink: string
}

export class Menu extends Component<any, MyState> {

    public items = [
        { label: 'Items', icon: 'pi pi-fw pi-list' },
        { label: 'Cart', icon: 'pi pi-fw pi-shopping-cart' }
    ];

    constructor(props: any) {
        super(props);
        this.state = {
            activeItem: this.items[0],
            routerLink: this.items[0].label.toLowerCase()
        }
    }

    componentDidMount() {
        const path = this.props.location.pathname;
        if (path === '/items') {
            this.setState({
                ...this.state,
                activeItem: this.items[0],
                routerLink: path.slice(0, 1)
            });
        } else if (path === '/cart') {
            this.setState({
                ...this.state,
                activeItem: this.items[1],
                routerLink: path.slice(0, 1)
            });
        }
    }

    setTabMenuRouteToPath(value: MyState["activeItem"]) {
        this.setState({
            ...this.state,
            activeItem: value,
            routerLink: value.label.toLowerCase()
        });

        this.props.history.push(value.label.toLowerCase());
    }

    render() {
        return (
            <div className="card">
                <TabMenu model={this.items} activeItem={this.state.activeItem} onTabChange={(e) => this.setTabMenuRouteToPath(e.value)} />
            </div>
        )
    }
}

export default withRouter(Menu)

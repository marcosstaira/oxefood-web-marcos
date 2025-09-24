import { Link } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react';

function MenuSistema() {

    return (
        <Menu inverted>

            <Menu.Item
                name='home'
                as={Link} 
                to='/' 
            >
                <Icon name='home' />
                Home
            </Menu.Item>

       
            <Menu.Item
                name='cliente'
                as={Link}
                to='/form-cliente' 
            >
                <Icon name='users' />
                Cliente
            </Menu.Item>


            <Menu.Item
                name='produto'
                as={Link}
                to='/form-produto' 
            >
                <Icon name='box' />
                Produto
            </Menu.Item>

            <Menu.Item
                name='entregador'
                as={Link}
                to='/form-entregador'
            >
                <Icon name='truck' />
                Entregador
            </Menu.Item>

        </Menu>
    )
}

export default MenuSistema;
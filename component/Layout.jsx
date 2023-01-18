import Contact_Info from "./Contact_Info";
import Header from "./Header";
import Links from "./Links";

export default function Layout(props) {
    return <>
    <Header/>
    {props.children}
    <Contact_Info/>
    <Links/>
    </>
}


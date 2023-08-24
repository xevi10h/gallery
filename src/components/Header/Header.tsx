import { useContext, useState } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import "./Header.css";
import CountrySelector from "../CountrySelector/CountrySelector";
import { PhotoContext, PhotoContextType } from "../../contexts/PhotoContext";

export default function Header() {
  const { viewType, setViewType, photoSelected } = useContext(
    PhotoContext
  ) as PhotoContextType;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  type View = {
    label: string;
    value: "grid" | "carousel" | "list" | "card";
  };

  const views: View[] = [
    { label: "Grid View", value: "grid" },
    { label: "Carousel View", value: "carousel" },
    { label: "List View", value: "list" },
    { label: "Card View", value: "card" },
  ];

  const imageUrl =
    "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_40e4275b85bd63f012509199e543c080/flowbox.png";
  return (
    <Toolbar
      className="headerRoot"
      style={photoSelected ? { display: "none" } : undefined}
    >
      <div className="menuContainer">
        <IconButton
          edge="start"
          className="menuButton"
          color="inherit"
          onClick={toggleDrawer(true)}
          data-testid="menu-button"
        >
          <Menu />
        </IconButton>
        <div className="logo">
          <img src={imageUrl} alt="Company Logo" />
        </div>
      </div>
      <CountrySelector />
      <Drawer anchor="left" open={drawerOpen} onClick={toggleDrawer(false)}>
        <List>
          {views.map((view, i) => (
            <ListItem
              className={`sidebar__button ${
                viewType === view.value ? "sidebar__button--active" : ""
              }`}
              onClick={() => setViewType(view.value)}
              key={i}
            >
              <ListItemText
                className="sidebar__button_text"
                primary={view.label}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Toolbar>
  );
}

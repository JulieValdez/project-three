import React from 'react';
import '../SideDrawer/DrawerToggleButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { Dropdown } from 'react-bootstrap';
import profilePopUpToggle from '../ProfilePopUp/profilePopUpToggle';

const profileToolbar = ({
	drawerClickHandler,
	userhandle,
	handleinputchange,
	bio,
	website,
	interest,
	onSubmit,
	handlemodalopen,
	modalopenstatus,
	handlemodalclose
}) => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div className="toolbar_toggle-button">
				<DrawerToggleButton click={drawerClickHandler} />
			</div>
			<div className="toolbar_logo">
				<a href="/" />
			</div>
			<div className="spacer" />
			<profilePopUpToggle
				userhandle={userhandle}
				handleinputchange={handleinputchange}
				bio={bio}
                website={website}
                interest={interest}
				onSubmit={onSubmit}
				handlemodalopen={handlemodalopen}
				modalopenstatus={modalopenstatus}
				handlemodalclose={handlemodalclose}
			/>
			<div className="toolbar_nav-items">
				<ul>
					{/* can use router but here using normal anchor tags below */}
					<li>
						<a href="/">Products</a>
					</li>
					<li>
						<a href="/">Users</a>
					</li>
					<li>
						<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Dropdown Button
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1" style={{ color: '#0a0404' }}>
									Action
								</Dropdown.Item>
								<Dropdown.Item href="#/action-2" style={{ color: '#0a0404' }}>
									Another action
								</Dropdown.Item>
								<Dropdown.Item href="#/action-3" style={{ color: '#0a0404' }}>
									Something else
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
				</ul>
			</div>
		</nav>
	</header>
);

export default profileToolbar;

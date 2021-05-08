import React from 'react';

const Header = (props) => {
  return (
    <header>
      <div class="topbar container">
        <div class="topbar__brand">
          <div class="logo"></div>
          <div class="company">Mejlík.cz</div>
        </div>

        {props.user === undefined ? (
          <div class="login">Přihlásit se</div>
        ) : (
          <div class="user">
            <div class="user__name">Radovan Holátko</div>
            <div class="user__icon"></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

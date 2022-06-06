import { Layout } from 'antd';
import classNames from 'classnames';
import React, { useContext } from 'react';
import type { GlobalHeaderProps } from './components/GlobalHeader';
import { GlobalHeader } from './components/GlobalHeader';
import type { PrivateSiderMenuProps } from './components/SiderMenu/SiderMenu';
import { TopNavHeader } from './components/TopNavHeader';
import { css, cx } from './emotion';
import type { LayoutDesignToken } from './ProLayoutContext';
import { DefaultDesignToken, ProLayoutContext } from './ProLayoutContext';
import type { WithFalse } from './typings';
import { clearMenuItem } from './utils/utils';

const { Header } = Layout;

const ProLayoutFixedHeaderCss = css({
  position: 'fixed',
  top: 0,
  padding: 0,
  backgroundColor: 'transparent',
});

const getProLayoutHeaderCss = (designToken: LayoutDesignToken) => {
  /**
   * 有没有设置默认的背景颜色，没有的话是透明的
   */
  const isChangeHeaderBgColor =
    designToken.header.headerBgColor !== DefaultDesignToken.header.headerBgColor;

  return css`
    z-index: 9;
    width: 100%;
    padding: 0 8px;
    border-bottom: 1px solid ${designToken.borderColorSplit};
    transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

    ${isChangeHeaderBgColor && `background-color: ${designToken.header.headerBgColor}`}
    ${!isChangeHeaderBgColor &&
    ` @supports (backdrop-filter: blur(8px) saturate(150%)) {
        background-color: rgba(255,255,255,0.58);
        backdrop-filter: blur(8px) saturate(150%);
      }
    `}
  `;
};

export type HeaderViewProps = GlobalHeaderProps & {
  isMobile?: boolean;
  logo?: React.ReactNode;
  headerRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >;
  headerTitleRender?: WithFalse<
    (logo: React.ReactNode, title: React.ReactNode, props: HeaderViewProps) => React.ReactNode
  >;
  headerContentRender?: WithFalse<
    (props: HeaderViewProps, defaultDom: React.ReactNode) => React.ReactNode
  >;
  siderWidth?: number;
  hasSiderMenu?: boolean;
};

const DefaultHeader: React.FC<HeaderViewProps & PrivateSiderMenuProps> = (props) => {
  const designToken = useContext(ProLayoutContext);

  const renderContent = () => {
    const { isMobile, onCollapse, navTheme, layout, headerRender, headerContentRender } = props;
    const isTop = layout === 'top';
    const clearMenuData = clearMenuItem(props.menuData || []);

    let defaultDom = (
      <GlobalHeader onCollapse={onCollapse} {...props} menuData={clearMenuData}>
        {headerContentRender && headerContentRender(props, null)}
      </GlobalHeader>
    );

    if (isTop && !isMobile) {
      defaultDom = (
        <TopNavHeader
          theme={navTheme as 'light' | 'dark'}
          mode="horizontal"
          onCollapse={onCollapse}
          {...props}
          menuData={clearMenuData}
        />
      );
    }
    if (headerRender && typeof headerRender === 'function') {
      return headerRender(props, defaultDom);
    }
    return defaultDom;
  };

  const getHeaderActionsCss = () => {
    const propsClassName = props.className;
    return css`
      .${propsClassName}-header-actions {
        display: flex;
        align-items: center;
        font-size: 16;
        cursor: pointer;
        &-item {
          padding: 0 8px;
          &:hover {
            color: ${designToken.colorText};
          }
        }
      }
      .${propsClassName}-header-realDark {
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 65%);
      }
      .${propsClassName}-header-actions-header-action {
        transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    `;
  };

  const {
    fixedHeader,
    layout,
    className: propsClassName,
    style,
    collapsed,
    prefixCls,
    headerHeight,
  } = props;
  const needFixedHeader = fixedHeader || layout === 'mix';
  const isTop = layout === 'top';

  const className = classNames(propsClassName, {
    [`${prefixCls}-fixed-header`]: needFixedHeader,
    [`${prefixCls}-fixed-header-action`]: !collapsed,
    [`${prefixCls}-top-menu`]: isTop,
    [`${prefixCls}-header`]: true,
  });

  const right = needFixedHeader ? 0 : undefined;

  if (layout === 'side') return null;
  return (
    <>
      {needFixedHeader && (
        <Header
          style={{
            height: headerHeight,
            lineHeight: `${headerHeight}px`,
            backgroundColor: 'transparent',
          }}
        />
      )}
      <Header
        className={cx(
          needFixedHeader && ProLayoutFixedHeaderCss,
          css({
            height: headerHeight,
            lineHeight: `${headerHeight}px`,
            width: '100%',
            zIndex: layout === 'mix' ? 100 : 19,
            right,
            ...style,
          }),
          className,
          getProLayoutHeaderCss(designToken),
          getHeaderActionsCss(),
        )}
      >
        {renderContent()}
      </Header>
    </>
  );
};

export { DefaultHeader };

/* eslint-disable */

import React from "react"
import {
  RiBuilding2Line,
  RiMailLine,
  RiPriceTag3Line,
  RiShoppingCartLine,
  RiVipDiamondLine,
  RiAdminLine,
  RiDraftLine,
} from "react-icons/ri"

export const navigationLinks = [
  { id: 1, name: "services", url: "/service", icon: <RiVipDiamondLine /> },
  { id: 2, name: "pricing", url: "/pricing", icon: <RiPriceTag3Line /> },
  { id: 3, name: "shop", url: "/shop", icon: <RiShoppingCartLine /> },
  { id: 4, name: "blog", url: "/blog", icon: <RiDraftLine /> },
  { id: 5, name: "about", url: "/about", icon: <RiBuilding2Line /> },
  { id: 6, name: "contact", url: "/contact", icon: <RiMailLine /> },
  { id: 7, name: "account", url: "/account", icon: <RiAdminLine /> },
]

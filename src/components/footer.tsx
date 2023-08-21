import * as React from "react";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    <div className={styles["con"]}>
      <nav>
        <span>
          Copyright © 2023-2024 WuHan PUZHITeck. All Rights
          Reserved.&nbsp;武汉朴智科技有限公司&nbsp;版权所有
        </span>
        <br />
        <a
          className={styles["link"]}
          href="http://beian.miit.gov.cn"
          target="_blank"
        >
          ICP备案/许可证号: 鄂ICP备2023006007号-1
        </a>
      </nav>
    </div>
  );
}

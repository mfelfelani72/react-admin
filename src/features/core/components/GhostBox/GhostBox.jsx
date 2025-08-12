import React, { useEffect, useRef, useState } from "react";
import Trigger from "./Trigger.jsx";
import Body from "./Body.jsx";
import { cn } from "../../../../../utils/libs/cn.js";

const GhostBox = ({
  className,
  trigger,
  triggerClassName,
  children,
  childrenClassName,
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const toggleVisible = () => {
    if (props?.function) {
      props?.function(props?.functionData);
    }
    const icon = document.getElementById(props?.id + "-icon");

    if (icon) {
      icon.classList.toggle("ltr:rotate-90");
      icon.classList.toggle("rtl:-rotate-90");
    }
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (!triggerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.target.offsetWidth + (props?.gap || 0));
      }
    });

    resizeObserver.observe(triggerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [props?.gap]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setVisible(false);
        const icon = document.getElementById(props?.id + "-icon");

        if (icon) {
          document
            .getElementById(props?.id + "-icon")
            .classList.toggle("ltr:rotate-90");
          document
            .getElementById(props?.id + "-icon")
            .classList.toggle("rtl:-rotate-90");
        }
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div
      id={props?.id}
      ref={containerRef}
      style={{ width: width > 0 ? width : "auto" }}
      className={cn("relative", className)}
    >
      <Trigger
        ref={triggerRef}
        onClick={toggleVisible}
        className={cn("", triggerClassName)}
      >
        {trigger}
      </Trigger>
      {visible && <Body className={cn("", childrenClassName)}>{children}</Body>}
    </div>
  );
};

export default GhostBox;

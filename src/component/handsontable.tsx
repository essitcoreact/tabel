import React, { useRef, useEffect } from 'react';
import Handsontable from 'handsontable';

interface Props {
  data: any;
}

const HandsontableComponent: React.FC<Props> = ({ data }) => {
  const hotElement = useRef<HTMLDivElement>(null);
  const hotInstance = useRef<Handsontable | null>(null);

  useEffect(() => {
    if (!hotElement.current) return;

    const options: Handsontable.GridSettings = {
      data: data,
      // colHeaders: true,
      rowHeaders: true,
      colHeaders:[
        "Company name",
        "Name",
        "Sell date",
        "In stock",
        "Qty",
        "Order ID",
        "Country"
      ],
      width: '100%',
      height: 'auto',
      dropdownMenu:true,
      hiddenColumns:{
        indicators: true
      },
      navigableHeaders:true,
      multiColumnSorting:true,
      filters:true,
      autoWrapRow:true,
      manualRowMove:true,
      licenseKey:"non-commercial-and-evaluation"
    };

    hotInstance.current = new Handsontable(hotElement.current, options);

    return () => {
      hotInstance.current && hotInstance.current.destroy();
    };
  }, [data]);

  return <div ref={hotElement} />;
};

export default HandsontableComponent;

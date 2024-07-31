import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

// 定義產品類型
interface Product {
  name: string;
  sku: string;
  description: string;
  upstreamUSBPort: string;
  serialStandard: string | string[];
  serialPortType: string;
  serialPortNumber: string;
  mounting: string;
  protection: string | string[];
  usbCommunication: string;
  price: string;
  link: string;
  imageUrl: string;
}
// 完整的產品數據
const products: Product[] = [
  {
    name: 'ULI-314DC',
    sku: 'BB-USR604',
    description: 'USB to RS-232/422/485 (DB9 Male) Industrial Isolated Converter, 4 Port',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-232', 'RS-422', 'RS-485'],
    serialPortType: 'DB9 Male',
    serialPortNumber: '4',
    mounting: 'DIN',
    protection: ['ESD', 'Isolation'],
    usbCommunication: '',
    price: 'US$530.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000000wesNAAQ?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-314DC_BB-USR604.png',
  },
  {
    name: 'ULI-321D',
    sku: 'BB-232USB9M',
    description: 'USB 2.0 to RS-232 Converter, DB9 Male',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-232',
    serialPortType: 'DB9 Male',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: '',
    price: 'US$70.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZYr4AAG?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321D_BB-232USB9M.png',
  },
  {
    name: 'ULI-321DK',
    sku: 'BB-232USB9M-LS',
    description: 'USB 2.0 to RS-232 Converter, DB9 Male. Locked Serial Number',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-232',
    serialPortType: 'DB9 Male',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: 'Locked Serial Number',
    price: 'US$75.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZYuIAAW?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DK_BB-232USB9M-LS.png',
  },
  {
    name: 'ULI-321DC',
    sku: 'BB-USO9ML2-A',
    description: 'USB 2.0 to RS-232 Converter, DB9 Male. Isolated',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-232',
    serialPortType: 'DB9 Male',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: ['ESD', 'Isolation'],
    usbCommunication: '',
    price: 'US$130.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005OsAhQAK?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DC_BB-USO9ML2-A.png',
  },
  {
    name: 'ULI-321DCK',
    sku: 'BB-USO9ML2-LS-A',
    description: 'USB 2.0 to RS-232 Converter, DB9 Male. Isolated. Locked Serial Number',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-232',
    serialPortType: 'DB9 Male',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: ['ESD', 'Isolation'],
    usbCommunication: 'Locked Serial Number',
    price: 'US$140.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005OsAiQAK?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-321DCK_BB-USO9ML2-LS-A.png',
  },
  {
    name: 'ULI-341TC',
    sku: 'BB-USOPTL4',
    description: 'USB to RS-422/485 (Terminal Block) Isolated Converter',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-422', 'RS-485'],
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: 'Isolation',
    usbCommunication: '',
    price: 'US$120.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000000wbzpAAA?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TC_BB-USOPTL4.png',
  },
  {
    name: 'ULI-341TCK',
    sku: 'BB-USOPTL4-LS',
    description: 'ULI-341TCK - USB to RS-422/485 (Terminal Block) Isolated Converter.',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-422', 'RS-485'],
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: 'Isolation',
    usbCommunication: 'Locked Serial Number',
    price: 'US$120.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZYnnAAG?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341TCK_BB-USOPTL4-LS.png',
  },
  {
    name: 'ULI-341DC',
    sku: 'BB-USO9ML4',
    description: 'USB to RS-422/485 (DB9 Male) Isolated Converter',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-422', 'RS-485'],
    serialPortType: 'DB9 Male',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: 'Isolation',
    usbCommunication: '',
    price: 'US$130.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000000wefhAAA?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-341DC_BB-USO9ML4.png',
  },
  {
    name: 'ULI-342TC',
    sku: 'BB-USOPTL4DR-2',
    description: 'USB to 2 Port RS422/485 (Terminal Block) Isolated Converter, DIN Rail',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-422', 'RS-485'],
    serialPortType: 'Terminal Block',
    serialPortNumber: '2',
    mounting: 'DIN',
    protection: 'Isolation',
    usbCommunication: '',
    price: 'US$215.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000000wesMAAQ?language=en_US',
    imageUrl:
      'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-342TC_BB-USOPTL4DR-274ddc11.png',
  },
  {
    name: 'ULI-344TC',
    sku: 'BB-USOPTL4-4P',
    description: 'USB to RS-422/485 (Terminal Block) Isolated Converter',
    upstreamUSBPort: 'B High Retention',
    serialStandard: ['RS-422', 'RS-485'],
    serialPortType: 'Terminal Block',
    serialPortNumber: '4',
    mounting: 'Panel',
    protection: 'Isolation',
    usbCommunication: '',
    price: 'US$360.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000001E1GHAA0?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-344TC_BB-USOPTL4-4P.png',
  },
  {
    name: 'ULI-351D',
    sku: 'BB-485USB9F-4W',
    description: 'USB to RS-485 4 Wire (DB9 Female) Converter',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-4854W',
    serialPortType: 'DB9 Female',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: '',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZYqPAAW?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351D_BB-485USB9F-4W.png',
  },
  {
    name: 'ULI-351DK',
    sku: 'BB-485USB9F-4W-LS',
    description: 'USB to RS-485 4 Wire (DB9 Female) Converter Locked Serial Number',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-4854W',
    serialPortType: 'DB9 Female',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: 'Locked Serial Number',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZZAAAA4?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351DK_BB-485USB9F-4W-LS.png',
  },
  {
    name: 'ULI-351T',
    sku: 'BB-485USBTB-4W-A',
    description: 'ULI-351T - USB to RS-485 4 Wire (Terminal Blaock) Converter',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-4854W',
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: '',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005Oq5eQAC?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351T_BB-485USBTB-4W-A.png',
  },
  {
    name: 'ULI-351TK',
    sku: 'BB-485USBTB4WLS-A',
    description: 'USB to RS-485 4-W (TB) Converter Locked Serial Number',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-4854W',
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: 'Locked Serial Number',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005Oq5fQAC?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-351TK_BB-485USBTB4WLS-A.png',
  },
  {
    name: 'ULI-361D',
    sku: 'BB-485USB9F-2W',
    description: 'USB to RS-485 2 Wire (DB9 Female) Converter',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-4852W',
    serialPortType: 'DB9 Female',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: '',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000000wc21AAA?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361D_BB-485USB9F-2W.png',
  },
  {
    name: 'ULI-361DK',
    sku: 'BB-485USB9F-2W-LS',
    description: 'USB to RS-485 2 Wire (DB9 Female) Converter. Locked Serial Number',
    upstreamUSBPort: 'Type B (Female)',
    serialStandard: 'RS-4852W',
    serialPortType: 'DB9 Female',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: 'Locked Serial Number',
    price: 'US$95.00',
    link: 'https://www.iotmart.com/s/product/detail/01t28000004ZZ4dAAG?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361DK_BB-485USB9F-2W-LS.png',
  },
  {
    name: 'ULI-361T',
    sku: 'BB-485USBTB-2W-A',
    description: 'USB to RS-485 2 Wire (Terminal Block) Converter',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-4852W',
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: '',
    price: 'US$80.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005Oq5cQAC?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361T_BB-485USBTB-2W-A.png',
  },
  {
    name: 'ULI-361TK',
    sku: 'BB-485USBTB2WLS-A',
    description: 'USB to RS-485 2 Wire (Terminal Block) Converter. Locked Serial Number',
    upstreamUSBPort: 'B High Retention',
    serialStandard: 'RS-4852W',
    serialPortType: 'Terminal Block',
    serialPortNumber: '1',
    mounting: 'In-line',
    protection: '',
    usbCommunication: 'Locked Serial Number',
    price: 'US$90.00',
    link: 'https://www.iotmart.com/s/product/detail/01t0K000005Oq5dQAC?language=en_US',
    imageUrl: 'https://irp.cdn-website.com/56869327/dms3rep/multi/ULI-361TK_BB-485USBTB2WLS-A.png',
  },
];
interface FilterOptionProps {
  label: string;
  options: string[];
  onChange: (value: string, checked?: boolean) => void;
  isCheckbox?: boolean;
}
const FilterOption: React.FC<FilterOptionProps> = ({
  label,
  options,
  onChange,
  isCheckbox = false,
}) => {
  return (
    <div className="filter-option">
      <label className="block font-bold text-sm mb-2 text-[#434447]">{label}</label>
      {isCheckbox ? (
        <div>
          {options.map((option, index) => (
            <div key={index} className="mb-1">
              <input
                type="checkbox"
                id={`${label}-${option}`}
                className="mr-2"
                onChange={(e) => onChange(option, e.target.checked)}
              />
              <label htmlFor={`${label}-${option}`} className="text-sm text-[#737B7D]">
                {option}
              </label>
            </div>
          ))}
        </div>
      ) : (
        <select
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-16 px-2 border border-[#CFD2D5] rounded text-base text-[#004280] bg-white focus:border-[#006EFF] focus:border-2"
        >
          <option value="">All</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card bg-white p-3 flex flex-col items-center rounded">
      <div className="product-image w-full h-40 relative mb-3 overflow-hidden rounded">
        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="product-details w-full">
        <h3 className="product-code text-2xl font-bold text-[#0C0C0C] mb-1">{product.name}</h3>
        <p className="product-sku text-xs font-bold text-[#B6BFC1] mb-1">{product.sku}</p>
        <p className="product-description text-sm text-[#737B7D] h-15 mb-2">
          {product.description}
        </p>
        <div className="product-price text-right text-2xl font-bold text-[#E57B03] mb-2">
          {product.price}
        </div>
        <button
          className="add-to-cart-button w-full bg-[#F39800] text-white font-bold py-2 px-4 rounded hover:bg-[#E67E00] transition duration-300"
          onClick={() => window.open(product.link, '_blank')}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

interface Filters {
  upstreamUSBPort: string;
  serialStandard: string;
  serialPortType: string[];
  serialPortNumber: string[];
  mounting: string[];
  protection: string[];
  usbCommunication: string[];
}
const USBToSerialConverterGuide = () => {
  const [filters, setFilters] = useState<Filters>({
    upstreamUSBPort: '',
    serialStandard: '',
    serialPortType: [],
    serialPortNumber: [],
    mounting: [],
    protection: [],
    usbCommunication: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts = products.filter((product) => {
      return (
        (!filters.upstreamUSBPort || product.upstreamUSBPort === filters.upstreamUSBPort) &&
        (!filters.serialStandard || product.serialStandard.includes(filters.serialStandard)) &&
        (filters.serialPortType.length === 0 ||
          filters.serialPortType.includes(product.serialPortType)) &&
        (filters.serialPortNumber.length === 0 ||
          filters.serialPortNumber.includes(product.serialPortNumber)) &&
        (filters.mounting.length === 0 || filters.mounting.includes(product.mounting)) &&
        (filters.protection.length === 0 ||
          filters.protection.some((p) => product.protection.includes(p))) &&
        (filters.usbCommunication.length === 0 ||
          filters.usbCommunication.includes(product.usbCommunication))
      );
    });
    setFilteredProducts(newFilteredProducts);
  }, [filters]);

  const handleSelectChange = (filterName: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const handleCheckboxChange = (filterName: keyof Filters, option: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: checked
        ? [...(Array.isArray(prev[filterName]) ? prev[filterName] : []), option]
        : Array.isArray(prev[filterName])
        ? (prev[filterName] as string[]).filter((item) => item !== option)
        : prev[filterName],
    }));
  };

  return (
    <div className="max-w-[2400px] mx-auto p-12 font-['Heebo','Microsoft_JhengHei','Heiti_SC','WenQuanYi_Micro_Hei','Inter'] bg-[#F6F7F9]">
      <h1 className="text-5xl font-light mb-6 text-[#004280] font-['Montserrat','Microsoft_JhengHei','Heiti_SC','WenQuanYi_Micro_Hei']">
        USB to Serial Converter
      </h1>

      <div className="flex">
        {/* 選項 */}
        <div className="filter-options w-1/4 pr-4">
          <FilterOption
            label="Upstream USB 2.0 Port"
            options={['B High Retention', 'Type B (Female)']}
            onChange={(value) => handleSelectChange('upstreamUSBPort', value)}
          />
          <FilterOption
            label="Serial Standard"
            options={['RS-232', 'RS-422', 'RS-485', 'RS-485, 2-wire', 'RS-485, 4-wire']}
            onChange={(value) => handleSelectChange('serialStandard', value)}
          />
          <FilterOption
            label="Serial Port type"
            options={['DB9 Female', 'DB9 Male', 'Terminal Block']}
            onChange={(option, checked = false) =>
              handleCheckboxChange('serialPortType', option, checked)
            }
            isCheckbox={true}
          />
          <FilterOption
            label="Serial Port Number"
            options={['1', '2', '4']}
            onChange={(option, checked = false) =>
              handleCheckboxChange('serialPortNumber', option, checked)
            }
            isCheckbox={true}
          />
          <FilterOption
            label="Mounting"
            options={['DIN', 'Panel', 'In-line']}
            onChange={(option, checked = false) =>
              handleCheckboxChange('mounting', option, checked)
            }
            isCheckbox={true}
          />
          <FilterOption
            label="Protection"
            options={['Isolation', 'ESD']}
            onChange={(option, checked = false) =>
              handleCheckboxChange('protection', option, checked)
            }
            isCheckbox={true}
          />
          <FilterOption
            label="USB Communication"
            options={['Locked Serial Number']}
            onChange={(option, checked = false) =>
              handleCheckboxChange('usbCommunication', option, checked)
            }
            isCheckbox={true}
          />
        </div>

        {/* 產品 */}
        <div className="products-container w-3/4 pl-4">
          <div className="flex flex-wrap -mx-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="w-full text-center text-2xl text-[#B6BFC1] my-8 font-light">
                抱歉，沒有找到匹配的結果。請調整或探索其他選項
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USBToSerialConverterGuide;

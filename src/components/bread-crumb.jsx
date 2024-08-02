import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';

const BreadCrumb = ({ items, className }) => {
	return (
		<div className='flex flex-row pt-10 mb-10 ml-2'>
			<Breadcrumb className={className}>
				<BreadcrumbList>
					{items.map((item, index) => {
						if (index !== items.length - 1) {
							return (
								<>
									<BreadcrumbItem>
										<BreadcrumbLink as={Link} href={item.href}>
											{item.label}
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator>
										<Slash />
									</BreadcrumbSeparator>
								</>
							);
						}
						return (
							<div key={index}>
								<BreadcrumbItem>
									<BreadcrumbLink isCurrentPage>{item.label}</BreadcrumbLink>
								</BreadcrumbItem>
							</div>
						);
					})}
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	);
};

BreadCrumb.propTypes = {
	items: PropTypes.array.isRequired,
	className: PropTypes.string.isRequired,
};

export default BreadCrumb;

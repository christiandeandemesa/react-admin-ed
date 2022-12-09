import {tokens} from '../theme';

// Fake user documents from MongoDB
export const mockDataUsers = [
	{
		id: 1,
		firstName: 'Christian',
		lastName: 'Demesa',
		email: 'cd@gmail.com',
		isAdmin: true
	},
	{
		id: 2,
		firstName: 'Bianca',
		lastName: 'Vazquez',
		email: 'bv@gmail.com',
		isAdmin: true
	},
	{
		id: 3,
		firstName: 'James',
		lastName: 'Vazquez',
		email: 'jv@gmail.com',
		isAdmin: false
	},
	{
		id: 4,
		firstName: 'Mateo',
		lastName: 'Vazquez',
		email: 'mv@gmail.com',
		isAdmin: false
	},
	{
		id: 5,
		firstName: 'Markus',
		lastName: 'Messiah',
		email: 'mm@gmail.com',
		isAdmin: true
	},
	{
		id: 6,
		firstName: 'CJ',
		lastName: 'Miller',
		email: 'cm@gmail.com',
		isAdmin: false
	}
];

// Fake product documents from MongoDB
export const mockDataProducts = [
	{
		id: 1,
		name: 'Ankle Socks',
		price: 12.99,
		category: ['men', 'women', 'children', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Black', 'White', 'Gray'],
		countInStock: 500
	},
	{
		id: 2,
		name: 'Blouse',
		price: 21.99,
		category: ['women', 'clothing'],
		size: ['S', 'M'],
		color: ['Black', 'White', 'Blue', 'Orange'],
		countInStock: 245
	},
	{
		id: 3,
		name: 'Cardigan',
		price: 49.95,
		category: ['women', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Brown', 'Green'],
		countInStock: 39
	},
	{
		id: 4,
		name: 'Down Jacket',
		price: 39.99,
		category: ['men', 'women', 'children', 'clothing'],
		size: ['XS', 'S', 'M', 'L'],
		color: ['Brown', 'Green'],
		countInStock: 268
	},
	{
		id: 5,
		name: 'Headband',
		price: 0.99,
		category: ['women', 'children', 'clothing'],
		size: ['XS', 'S', 'M'],
		color: ['Yellow', 'White', 'Gray', 'Brown', 'Orange', 'Blue'],
		countInStock: 862
	},
	{
		id: 6,
		name: 'Leather Jacket',
		price: 52.99,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['S', 'M', 'L'],
		color: ['Black'],
		countInStock: 553
	},
	{
		id: 7,
		name: "Men's Belt",
		price: 16.99,
		category: ['men', 'accesories'],
		size: ['M', 'L'],
		color: ['Brown', 'Black'],
		countInStock: 127
	},
	{
		id: 8,
		name: 'Rancher Cap',
		price: 59.99,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['S', 'M', 'L', 'XL'],
		color: ['Red', 'Gray', 'Black', 'Orange', 'Brown', 'Green'],
		countInStock: 539
	},
	{
		id: 9,
		name: 'Scarf',
		price: 49.95,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['XS', 'S', 'M', 'L', 'XL'],
		color: ['Red'],
		countInStock: 289
	},
	{
		id: 10,
		name: 'Tennis Shoes',
		price: 34.26,
		category: ['men', 'women', 'children', 'accesories'],
		size: ['XS', 'S', 'M', 'L', 'XL'],
		color: ['Purple', 'White', 'Pink', 'Black', 'Gray', 'Blue'],
		countInStock: 123
	},
	{
		id: 11,
		name: "Women's Cargo Pants",
		price: 36.99,
		category: ['women', 'children', 'clothing'],
		size: ['XS', 'S'],
		color: ['Brown', 'White', 'Black', 'Pink', 'Green'],
		countInStock: 729
	}
];

// Fake order documents from MongoDB
export const mockDataOrders = [
	{
		id: 1,
		name: 'Simonette Reyes',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 25.99
	},
	{
		id: 2,
		name: 'Albert Singleterry',
		products: [
			{
				id: 12,
				name: 'Christmas Sweater',
				price: 25.99,
				size: ['L'],
				color: ['Red'],
				quantity: 1
			},
			{
				id: 13,
				name: 'Wool Cap',
				price: 22.9,
				size: ['L'],
				color: ['White'],
				quantity: 7
			}
		],
		address: '123 Imaginary Lane, Los Angeles, CA 90001',
		totalPrice: 186.29
	}
];

// Fake products' bar data
export const mockBarData = [
	{
		state: 'CA',
		shirt: 137,
		shirtColor: 'hsl(229, 70%, 50%)',
		pants: 96,
		pantsColor: 'hsl(296, 70%, 50%)',
		dress: 72,
		dressColor: 'hsl(97, 70%, 50%)',
		shoes: 140,
		shoesColor: 'hsl(340, 70%, 50%)'
	},
	{
		state: 'FL',
		shirt: 55,
		shirtColor: 'hsl(307, 70%, 50%)',
		pants: 28,
		pantsColor: 'hsl(111, 70%, 50%)',
		dress: 58,
		dressColor: 'hsl(273, 70%, 50%)',
		shoes: 29,
		shoesColor: 'hsl(275, 70%, 50%)'
	},
	{
		state: 'IL',
		shirt: 109,
		shirtColor: 'hsl(72, 70%, 50%)',
		pants: 23,
		pantsColor: 'hsl(96, 70%, 50%)',
		dress: 34,
		dressColor: 'hsl(106, 70%, 50%)',
		shoes: 152,
		shoesColor: 'hsl(256, 70%, 50%)'
	},
	{
		state: 'NY',
		shirt: 133,
		shirtColor: 'hsl(257, 70%, 50%)',
		pants: 52,
		pantsColor: 'hsl(326, 70%, 50%)',
		dress: 43,
		dressColor: 'hsl(110, 70%, 50%)',
		shoes: 83,
		shoesColor: 'hsl(9, 70%, 50%)'
	},
	{
		state: 'PA',
		shirt: 81,
		shirtColor: 'hsl(190, 70%, 50%)',
		pants: 80,
		pantsColor: 'hsl(325, 70%, 50%)',
		dress: 112,
		dressColor: 'hsl(54, 70%, 50%)',
		shoes: 35,
		shoesColor: 'hsl(285, 70%, 50%)'
	},
	{
		state: 'TX',
		shirt: 66,
		shirtColor: 'hsl(208, 70%, 50%)',
		pants: 111,
		pantsColor: 'hsl(334, 70%, 50%)',
		dress: 167,
		dressColor: 'hsl(182, 70%, 50%)',
		shoes: 18,
		shoesColor: 'hsl(76, 70%, 50%)'
	},
	{
		state: 'AM',
		shirt: 80,
		shirtColor: 'hsl(87, 70%, 50%)',
		pants: 47,
		pantsColor: 'hsl(141, 70%, 50%)',
		dress: 158,
		dressColor: 'hsl(224, 70%, 50%)',
		shoes: 49,
		shoesColor: 'hsl(274, 70%, 50%)'
	}
];

// Fake products' pie data
export const mockPieData = [
	{
		id: 'shirt',
		label: 'shirt',
		value: 239,
		color: 'hsl(104, 70%, 50%)'
	},
	{
		id: 'pants',
		label: 'pants',
		value: 170,
		color: 'hsl(162, 70%, 50%)'
	},
	{
		id: 'dress',
		label: 'dress',
		value: 322,
		color: 'hsl(291, 70%, 50%)'
	},
	{
		id: 'shoes',
		label: 'shoes',
		value: 503,
		color: 'hsl(229, 70%, 50%)'
	},
	{
		id: 'jacket',
		label: 'jacket',
		value: 584,
		color: 'hsl(344, 70%, 50%)'
	},
	{
		id: 'hat',
		label: 'hat',
		value: 99,
		color: 'hsl(72, 70%, 50%)'
	}
];

export const mockLineData = [
	{
		id: 'japan',
		color: tokens('dark').greenAccent[500],
		data: [
			{
				x: 'plane',
				y: 101
			},
			{
				x: 'helicopter',
				y: 75
			},
			{
				x: 'boat',
				y: 36
			},
			{
				x: 'train',
				y: 216
			},
			{
				x: 'subway',
				y: 35
			},
			{
				x: 'bus',
				y: 236
			},
			{
				x: 'car',
				y: 88
			},
			{
				x: 'moto',
				y: 232
			},
			{
				x: 'bicycle',
				y: 281
			},
			{
				x: 'horse',
				y: 1
			},
			{
				x: 'skateboard',
				y: 35
			},
			{
				x: 'others',
				y: 14
			}
		]
	},
	{
		id: 'france',
		color: tokens('dark').blueAccent[300],
		data: [
			{
				x: 'plane',
				y: 212
			},
			{
				x: 'helicopter',
				y: 190
			},
			{
				x: 'boat',
				y: 270
			},
			{
				x: 'train',
				y: 9
			},
			{
				x: 'subway',
				y: 75
			},
			{
				x: 'bus',
				y: 175
			},
			{
				x: 'car',
				y: 33
			},
			{
				x: 'moto',
				y: 189
			},
			{
				x: 'bicycle',
				y: 97
			},
			{
				x: 'horse',
				y: 87
			},
			{
				x: 'skateboard',
				y: 299
			},
			{
				x: 'others',
				y: 251
			}
		]
	},
	{
		id: 'us',
		color: tokens('dark').redAccent[200],
		data: [
			{
				x: 'plane',
				y: 191
			},
			{
				x: 'helicopter',
				y: 136
			},
			{
				x: 'boat',
				y: 91
			},
			{
				x: 'train',
				y: 190
			},
			{
				x: 'subway',
				y: 211
			},
			{
				x: 'bus',
				y: 152
			},
			{
				x: 'car',
				y: 189
			},
			{
				x: 'moto',
				y: 152
			},
			{
				x: 'bicycle',
				y: 8
			},
			{
				x: 'horse',
				y: 197
			},
			{
				x: 'skateboard',
				y: 107
			},
			{
				x: 'others',
				y: 170
			}
		]
	}
];

export const mockGeographyData = [
	{
		id: 'AFG',
		value: 520600
	},
	{
		id: 'AGO',
		value: 949905
	},
	{
		id: 'ALB',
		value: 329910
	},
	{
		id: 'ARE',
		value: 675484
	},
	{
		id: 'ARG',
		value: 432239
	},
	{
		id: 'ARM',
		value: 288305
	},
	{
		id: 'ATA',
		value: 415648
	},
	{
		id: 'ATF',
		value: 665159
	},
	{
		id: 'AUT',
		value: 798526
	},
	{
		id: 'AZE',
		value: 481678
	},
	{
		id: 'BDI',
		value: 496457
	},
	{
		id: 'BEL',
		value: 252276
	},
	{
		id: 'BEN',
		value: 440315
	},
	{
		id: 'BFA',
		value: 343752
	},
	{
		id: 'BGD',
		value: 920203
	},
	{
		id: 'BGR',
		value: 261196
	},
	{
		id: 'BHS',
		value: 421551
	},
	{
		id: 'BIH',
		value: 974745
	},
	{
		id: 'BLR',
		value: 349288
	},
	{
		id: 'BLZ',
		value: 305983
	},
	{
		id: 'BOL',
		value: 430840
	},
	{
		id: 'BRN',
		value: 345666
	},
	{
		id: 'BTN',
		value: 649678
	},
	{
		id: 'BWA',
		value: 319392
	},
	{
		id: 'CAF',
		value: 722549
	},
	{
		id: 'CAN',
		value: 332843
	},
	{
		id: 'CHE',
		value: 122159
	},
	{
		id: 'CHL',
		value: 811736
	},
	{
		id: 'CHN',
		value: 593604
	},
	{
		id: 'CIV',
		value: 143219
	},
	{
		id: 'CMR',
		value: 630627
	},
	{
		id: 'COG',
		value: 498556
	},
	{
		id: 'COL',
		value: 660527
	},
	{
		id: 'CRI',
		value: 60262
	},
	{
		id: 'CUB',
		value: 177870
	},
	{
		id: '-99',
		value: 463208
	},
	{
		id: 'CYP',
		value: 945909
	},
	{
		id: 'CZE',
		value: 500109
	},
	{
		id: 'DEU',
		value: 63345
	},
	{
		id: 'DJI',
		value: 634523
	},
	{
		id: 'DNK',
		value: 731068
	},
	{
		id: 'DOM',
		value: 262538
	},
	{
		id: 'DZA',
		value: 760695
	},
	{
		id: 'ECU',
		value: 301263
	},
	{
		id: 'EGY',
		value: 148475
	},
	{
		id: 'ERI',
		value: 939504
	},
	{
		id: 'ESP',
		value: 706050
	},
	{
		id: 'EST',
		value: 977015
	},
	{
		id: 'ETH',
		value: 461734
	},
	{
		id: 'FIN',
		value: 22800
	},
	{
		id: 'FJI',
		value: 18985
	},
	{
		id: 'FLK',
		value: 64986
	},
	{
		id: 'FRA',
		value: 447457
	},
	{
		id: 'GAB',
		value: 669675
	},
	{
		id: 'GBR',
		value: 757120
	},
	{
		id: 'GEO',
		value: 158702
	},
	{
		id: 'GHA',
		value: 893180
	},
	{
		id: 'GIN',
		value: 877288
	},
	{
		id: 'GMB',
		value: 724530
	},
	{
		id: 'GNB',
		value: 387753
	},
	{
		id: 'GNQ',
		value: 706118
	},
	{
		id: 'GRC',
		value: 377796
	},
	{
		id: 'GTM',
		value: 66890
	},
	{
		id: 'GUY',
		value: 719300
	},
	{
		id: 'HND',
		value: 739590
	},
	{
		id: 'HRV',
		value: 929467
	},
	{
		id: 'HTI',
		value: 538961
	},
	{
		id: 'HUN',
		value: 146095
	},
	{
		id: 'IDN',
		value: 490681
	},
	{
		id: 'IND',
		value: 549818
	},
	{
		id: 'IRL',
		value: 630163
	},
	{
		id: 'IRN',
		value: 596921
	},
	{
		id: 'IRQ',
		value: 767023
	},
	{
		id: 'ISL',
		value: 478682
	},
	{
		id: 'ISR',
		value: 963688
	},
	{
		id: 'ITA',
		value: 393089
	},
	{
		id: 'JAM',
		value: 83173
	},
	{
		id: 'JOR',
		value: 52005
	},
	{
		id: 'JPN',
		value: 199174
	},
	{
		id: 'KAZ',
		value: 181424
	},
	{
		id: 'KEN',
		value: 60946
	},
	{
		id: 'KGZ',
		value: 432478
	},
	{
		id: 'KHM',
		value: 254461
	},
	{
		id: 'OSA',
		value: 942447
	},
	{
		id: 'KWT',
		value: 414413
	},
	{
		id: 'LAO',
		value: 448339
	},
	{
		id: 'LBN',
		value: 620090
	},
	{
		id: 'LBR',
		value: 435950
	},
	{
		id: 'LBY',
		value: 75091
	},
	{
		id: 'LKA',
		value: 595124
	},
	{
		id: 'LSO',
		value: 483524
	},
	{
		id: 'LTU',
		value: 867357
	},
	{
		id: 'LUX',
		value: 689172
	},
	{
		id: 'LVA',
		value: 742980
	},
	{
		id: 'MAR',
		value: 236538
	},
	{
		id: 'MDA',
		value: 926836
	},
	{
		id: 'MDG',
		value: 840840
	},
	{
		id: 'MEX',
		value: 353910
	},
	{
		id: 'MKD',
		value: 505842
	},
	{
		id: 'MLI',
		value: 286082
	},
	{
		id: 'MMR',
		value: 915544
	},
	{
		id: 'MNE',
		value: 609500
	},
	{
		id: 'MNG',
		value: 410428
	},
	{
		id: 'MOZ',
		value: 32868
	},
	{
		id: 'MRT',
		value: 375671
	},
	{
		id: 'MWI',
		value: 591935
	},
	{
		id: 'MYS',
		value: 991644
	},
	{
		id: 'NAM',
		value: 701897
	},
	{
		id: 'NCL',
		value: 144098
	},
	{
		id: 'NER',
		value: 312944
	},
	{
		id: 'NGA',
		value: 862877
	},
	{
		id: 'NIC',
		value: 90831
	},
	{
		id: 'NLD',
		value: 281879
	},
	{
		id: 'NOR',
		value: 224537
	},
	{
		id: 'NPL',
		value: 322331
	},
	{
		id: 'NZL',
		value: 86615
	},
	{
		id: 'OMN',
		value: 707881
	},
	{
		id: 'PAK',
		value: 158577
	},
	{
		id: 'PAN',
		value: 738579
	},
	{
		id: 'PER',
		value: 248751
	},
	{
		id: 'PHL',
		value: 557292
	},
	{
		id: 'PNG',
		value: 516874
	},
	{
		id: 'POL',
		value: 682137
	},
	{
		id: 'PRI',
		value: 957399
	},
	{
		id: 'PRT',
		value: 846430
	},
	{
		id: 'PRY',
		value: 720555
	},
	{
		id: 'QAT',
		value: 478726
	},
	{
		id: 'ROU',
		value: 259318
	},
	{
		id: 'RUS',
		value: 268735
	},
	{
		id: 'RWA',
		value: 136781
	},
	{
		id: 'ESH',
		value: 151957
	},
	{
		id: 'SAU',
		value: 111821
	},
	{
		id: 'SDN',
		value: 927112
	},
	{
		id: 'SDS',
		value: 966473
	},
	{
		id: 'SEN',
		value: 158085
	},
	{
		id: 'SLB',
		value: 178389
	},
	{
		id: 'SLE',
		value: 528433
	},
	{
		id: 'SLV',
		value: 353467
	},
	{
		id: 'ABV',
		value: 251
	},
	{
		id: 'SOM',
		value: 445243
	},
	{
		id: 'SRB',
		value: 202402
	},
	{
		id: 'SUR',
		value: 972121
	},
	{
		id: 'SVK',
		value: 319923
	},
	{
		id: 'SVN',
		value: 728766
	},
	{
		id: 'SWZ',
		value: 379669
	},
	{
		id: 'SYR',
		value: 16221
	},
	{
		id: 'TCD',
		value: 101273
	},
	{
		id: 'TGO',
		value: 498411
	},
	{
		id: 'THA',
		value: 506906
	},
	{
		id: 'TJK',
		value: 613093
	},
	{
		id: 'TKM',
		value: 327016
	},
	{
		id: 'TLS',
		value: 607972
	},
	{
		id: 'TTO',
		value: 936365
	},
	{
		id: 'TUN',
		value: 898416
	},
	{
		id: 'TUR',
		value: 237783
	},
	{
		id: 'TWN',
		value: 878213
	},
	{
		id: 'TZA',
		value: 442174
	},
	{
		id: 'UGA',
		value: 720710
	},
	{
		id: 'UKR',
		value: 74172
	},
	{
		id: 'URY',
		value: 753177
	},
	{
		id: 'USA',
		value: 658725
	},
	{
		id: 'UZB',
		value: 550313
	},
	{
		id: 'VEN',
		value: 707492
	},
	{
		id: 'VNM',
		value: 538907
	},
	{
		id: 'VUT',
		value: 650646
	},
	{
		id: 'PSE',
		value: 476078
	},
	{
		id: 'YEM',
		value: 957751
	},
	{
		id: 'ZAF',
		value: 836949
	},
	{
		id: 'ZMB',
		value: 714503
	},
	{
		id: 'ZWE',
		value: 405217
	},
	{
		id: 'KOR',
		value: 171135
	}
];

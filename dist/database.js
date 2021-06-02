(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.GpuPowerEstimate = global.GpuPowerEstimate || {}));
}(this, (function (exports) { 'use strict';

	var database = [{
	  "names": ["FirePro 2270"],
	  "vendor": "AMD",
	  "performance": 178
	}, {
	  "names": ["FirePro M2000", "AMD FirePro M2000"],
	  "vendor": "AMD",
	  "performance": 361
	}, {
	  "names": ["FirePro M4000", "AMD FirePro M4000"],
	  "vendor": "AMD",
	  "performance": 1658
	}, {
	  "names": ["Firepro M4100", "FirePro M4100", "AMD FirePro M4100"],
	  "vendor": "AMD",
	  "performance": 1059
	}, {
	  "names": ["FirePro M4150"],
	  "vendor": "AMD",
	  "performance": 991
	}, {
	  "names": ["FirePro M5100", "AMD FirePro M5100"],
	  "vendor": "AMD",
	  "performance": 2103
	}, {
	  "names": ["FirePro M5950", "AMD FirePro M5950"],
	  "vendor": "AMD",
	  "performance": 1314
	}, {
	  "names": ["FirePro M6000", "AMD FirePro M6000"],
	  "vendor": "AMD",
	  "performance": 1820
	}, {
	  "names": ["FirePro M6100", "AMD FirePro M6100"],
	  "vendor": "AMD",
	  "performance": 2054
	}, {
	  "names": ["FirePro R5000"],
	  "vendor": "AMD",
	  "performance": 2647
	}, {
	  "names": ["FirePro S10000"],
	  "vendor": "AMD",
	  "performance": 5235
	}, {
	  "names": ["FirePro S7000"],
	  "vendor": "AMD",
	  "performance": 4166
	}, {
	  "names": ["FirePro S7150"],
	  "vendor": "AMD",
	  "performance": 6276
	}, {
	  "names": ["FirePro S9000"],
	  "vendor": "AMD",
	  "performance": 5059
	}, {
	  "names": ["FirePro S9050"],
	  "vendor": "AMD",
	  "performance": 3912
	}, {
	  "names": ["FirePro V3900"],
	  "vendor": "AMD",
	  "performance": 691
	}, {
	  "names": ["FirePro V4900"],
	  "vendor": "AMD",
	  "performance": 1067
	}, {
	  "names": ["FirePro V5900"],
	  "vendor": "AMD",
	  "performance": 1325
	}, {
	  "names": ["FirePro V7900"],
	  "vendor": "AMD",
	  "performance": 2228
	}, {
	  "names": ["FirePro W2100", "AMD FirePro W2100"],
	  "vendor": "AMD",
	  "performance": 898
	}, {
	  "names": ["FirePro W4100", "AMD FirePro W4100"],
	  "vendor": "AMD",
	  "performance": 1509
	}, {
	  "names": ["FirePro W4170M", "AMD FirePro W4170M"],
	  "vendor": "AMD",
	  "performance": 937
	}, {
	  "names": ["Firepro W4190M", "FirePro W4190M", "AMD FirePro W4190M"],
	  "vendor": "AMD",
	  "performance": 1195
	}, {
	  "names": ["FirePro W4300"],
	  "vendor": "AMD",
	  "performance": 2734
	}, {
	  "names": ["FirePro W5000"],
	  "vendor": "AMD",
	  "performance": 2948
	}, {
	  "names": ["FirePro W5100"],
	  "vendor": "AMD",
	  "performance": 2959
	}, {
	  "names": ["FirePro W5130M", "AMD FirePro W5130M"],
	  "vendor": "AMD",
	  "performance": 1382
	}, {
	  "names": ["Firepro W5170M", "FirePro W5170M", "AMD FirePro W5170M"],
	  "vendor": "AMD",
	  "performance": 1605
	}, {
	  "names": ["FirePro W600"],
	  "vendor": "AMD",
	  "performance": 1725
	}, {
	  "names": ["FirePro W7000"],
	  "vendor": "AMD",
	  "performance": 4106
	}, {
	  "names": ["FirePro W7100"],
	  "vendor": "AMD",
	  "performance": 4975
	}, {
	  "names": ["FirePro W7170M", "AMD FirePro W7170M"],
	  "vendor": "AMD",
	  "performance": 3849
	}, {
	  "names": ["FirePro W8000"],
	  "vendor": "AMD",
	  "performance": 3454
	}, {
	  "names": ["FirePro W8100"],
	  "vendor": "AMD",
	  "performance": 6986
	}, {
	  "names": ["FirePro W9000"],
	  "vendor": "AMD",
	  "performance": 5908
	}, {
	  "names": ["FirePro W9100"],
	  "vendor": "AMD",
	  "performance": 7750
	}, {
	  "names": ["GeForce 315M", "NVIDIA GeForce 315M"],
	  "vendor": "NVIDIA",
	  "performance": 122
	}, {
	  "names": ["GeForce 410M", "NVIDIA GeForce 410M"],
	  "vendor": "NVIDIA",
	  "performance": 242
	}, {
	  "names": ["GeForce 505", "GeForce 505 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 187
	}, {
	  "names": ["GeForce 510", "GeForce 510 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 249
	}, {
	  "names": ["GeForce 605", "GeForce 605 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 313
	}, {
	  "names": ["GeForce 610M", "NVIDIA GeForce 610M"],
	  "vendor": "NVIDIA",
	  "performance": 285
	}, {
	  "names": ["GeForce 615"],
	  "vendor": "NVIDIA",
	  "performance": 549
	}, {
	  "names": ["GeForce 705M", "NVIDIA GeForce 705M"],
	  "vendor": "NVIDIA",
	  "performance": 456
	}, {
	  "names": ["GeForce 710A"],
	  "vendor": "NVIDIA",
	  "performance": 487
	}, {
	  "names": ["GeForce 710M", "NVIDIA GeForce 710M"],
	  "vendor": "NVIDIA",
	  "performance": 442
	}, {
	  "names": ["GeForce 720A"],
	  "vendor": "NVIDIA",
	  "performance": 725
	}, {
	  "names": ["GeForce 730A", "GeForce GT 730A"],
	  "vendor": "NVIDIA",
	  "performance": 774
	}, {
	  "names": ["GeForce 770M", "GeForce GTX 770M", "NVIDIA GeForce GTX 770M"],
	  "vendor": "NVIDIA",
	  "performance": 3246
	}, {
	  "names": ["GeForce 800A"],
	  "vendor": "NVIDIA",
	  "performance": 428
	}, {
	  "names": ["GeForce 800M"],
	  "vendor": "NVIDIA",
	  "performance": 468
	}, {
	  "names": ["GeForce 810A"],
	  "vendor": "NVIDIA",
	  "performance": 627
	}, {
	  "names": ["GeForce 810M"],
	  "vendor": "NVIDIA",
	  "performance": 372
	}, {
	  "names": ["GeForce 820A"],
	  "vendor": "NVIDIA",
	  "performance": 706
	}, {
	  "names": ["GeForce 820M", "NVIDIA GeForce 820M"],
	  "vendor": "NVIDIA",
	  "performance": 507
	}, {
	  "names": ["GeForce 825M", "NVIDIA GeForce 825M"],
	  "vendor": "NVIDIA",
	  "performance": 769
	}, {
	  "names": ["GeForce 830A"],
	  "vendor": "NVIDIA",
	  "performance": 1005
	}, {
	  "names": ["GeForce 830M", "NVIDIA GeForce 830M"],
	  "vendor": "NVIDIA",
	  "performance": 981
	}, {
	  "names": ["GeForce 840A"],
	  "vendor": "NVIDIA",
	  "performance": 1137
	}, {
	  "names": ["GeForce 840M", "NVIDIA GeForce 840M"],
	  "vendor": "NVIDIA",
	  "performance": 1052
	}, {
	  "names": ["GeForce 845M", "NVIDIA GeForce 845M"],
	  "vendor": "NVIDIA",
	  "performance": 1317
	}, {
	  "names": ["GeForce 910M", "NVIDIA GeForce 910M"],
	  "vendor": "NVIDIA",
	  "performance": 609
	}, {
	  "names": ["GeForce 920A"],
	  "vendor": "NVIDIA",
	  "performance": 919
	}, {
	  "names": ["GeForce 920M", "NVIDIA GeForce 920M"],
	  "vendor": "NVIDIA",
	  "performance": 730
	}, {
	  "names": ["GeForce 920MX", "NVIDIA GeForce 920MX"],
	  "vendor": "NVIDIA",
	  "performance": 1069
	}, {
	  "names": ["GeForce 930A"],
	  "vendor": "NVIDIA",
	  "performance": 1227
	}, {
	  "names": ["GeForce 930M", "NVIDIA GeForce 930M"],
	  "vendor": "NVIDIA",
	  "performance": 1020
	}, {
	  "names": ["GeForce 930MX", "NVIDIA GeForce 930MX"],
	  "vendor": "NVIDIA",
	  "performance": 1339
	}, {
	  "names": ["GeForce 940A"],
	  "vendor": "NVIDIA",
	  "performance": 1145
	}, {
	  "names": ["GeForce 940M", "NVIDIA GeForce 940M"],
	  "vendor": "NVIDIA",
	  "performance": 1098
	}, {
	  "names": ["GeForce 940MX", "NVIDIA GeForce 940MX"],
	  "vendor": "NVIDIA",
	  "performance": 1524
	}, {
	  "names": ["GeForce 945A"],
	  "vendor": "NVIDIA",
	  "performance": 1852
	}, {
	  "names": ["GeForce 945M", "NVIDIA GeForce 945M"],
	  "vendor": "NVIDIA",
	  "performance": 2169
	}, {
	  "names": ["GeForce GT 1030", "NVIDIA GeForce GT 1030 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 2620
	}, {
	  "names": ["GeForce GT 440"],
	  "vendor": "NVIDIA",
	  "performance": 790
	}, {
	  "names": ["GeForce GT 520"],
	  "vendor": "NVIDIA",
	  "performance": 293
	}, {
	  "names": ["GeForce GT 520M", "NVIDIA GeForce GT 520M"],
	  "vendor": "NVIDIA",
	  "performance": 275
	}, {
	  "names": ["GeForce GT 520MX", "NVIDIA GeForce GT 520MX"],
	  "vendor": "NVIDIA",
	  "performance": 298
	}, {
	  "names": ["GeForce GT 525M", "NVIDIA GeForce GT 525M"],
	  "vendor": "NVIDIA",
	  "performance": 436
	}, {
	  "names": ["GeForce GT 530", "GeForce GT 530 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 675
	}, {
	  "names": ["GeForce GT 540M", "NVIDIA GeForce GT 540M"],
	  "vendor": "NVIDIA",
	  "performance": 505
	}, {
	  "names": ["GeForce GT 545"],
	  "vendor": "NVIDIA",
	  "performance": 1080
	}, {
	  "names": ["GeForce GT 550M", "NVIDIA GeForce GT 550M"],
	  "vendor": "NVIDIA",
	  "performance": 581
	}, {
	  "names": ["GeForce GT 555M", "NVIDIA GeForce GT 555M"],
	  "vendor": "NVIDIA",
	  "performance": 703
	}, {
	  "names": ["GeForce GT 610"],
	  "vendor": "NVIDIA",
	  "performance": 296
	}, {
	  "names": ["GeForce GT 620"],
	  "vendor": "NVIDIA",
	  "performance": 362
	}, {
	  "names": ["GeForce GT 620M", "NVIDIA GeForce GT 620M"],
	  "vendor": "NVIDIA",
	  "performance": 427
	}, {
	  "names": ["GeForce GT 625", "GeForce GT 625 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 315
	}, {
	  "names": ["GeForce GT 625M", "NVIDIA GeForce GT 625M"],
	  "vendor": "NVIDIA",
	  "performance": 435
	}, {
	  "names": ["GeForce GT 630"],
	  "vendor": "NVIDIA",
	  "performance": 667
	}, {
	  "names": ["GeForce GT 630M", "NVIDIA GeForce GT 630M"],
	  "vendor": "NVIDIA",
	  "performance": 543
	}, {
	  "names": ["GeForce GT 635", "GeForce GT 635 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 832
	}, {
	  "names": ["GeForce GT 635M", "NVIDIA GeForce GT 635M"],
	  "vendor": "NVIDIA",
	  "performance": 567
	}, {
	  "names": ["GeForce GT 640"],
	  "vendor": "NVIDIA",
	  "performance": 1167
	}, {
	  "names": ["GeForce GT 640M", "NVIDIA GeForce GT 640M"],
	  "vendor": "NVIDIA",
	  "performance": 899
	}, {
	  "names": ["GeForce GT 640M LE", "NVIDIA GeForce GT 640M LE"],
	  "vendor": "NVIDIA",
	  "performance": 693
	}, {
	  "names": ["GeForce GT 645", "GeForce GT 645 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2006
	}, {
	  "names": ["GeForce GT 645M", "NVIDIA GeForce GT 645M"],
	  "vendor": "NVIDIA",
	  "performance": 950
	}, {
	  "names": ["GeForce GT 650M", "NVIDIA GeForce GT 650M"],
	  "vendor": "NVIDIA",
	  "performance": 1173
	}, {
	  "names": ["GeForce GT 705", "GeForce GT 705 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 326
	}, {
	  "names": ["GeForce GT 710", "NVIDIA GeForce GT 710"],
	  "vendor": "NVIDIA",
	  "performance": 638
	}, {
	  "names": ["GeForce GT 710M"],
	  "vendor": "NVIDIA",
	  "performance": 438
	}, {
	  "names": ["GeForce GT 720"],
	  "vendor": "NVIDIA",
	  "performance": 582
	}, {
	  "names": ["GeForce GT 720A"],
	  "vendor": "NVIDIA",
	  "performance": 614
	}, {
	  "names": ["GeForce GT 720M", "NVIDIA GeForce GT 720M"],
	  "vendor": "NVIDIA",
	  "performance": 452
	}, {
	  "names": ["GeForce GT 730"],
	  "vendor": "NVIDIA",
	  "performance": 804
	}, {
	  "names": ["GeForce GT 730M", "NVIDIA GeForce GT 730M"],
	  "vendor": "NVIDIA",
	  "performance": 841
	}, {
	  "names": ["GeForce GT 735M", "NVIDIA GeForce GT 735M"],
	  "vendor": "NVIDIA",
	  "performance": 662
	}, {
	  "names": ["GeForce GT 740"],
	  "vendor": "NVIDIA",
	  "performance": 1553
	}, {
	  "names": ["GeForce GT 740A"],
	  "vendor": "NVIDIA",
	  "performance": 707
	}, {
	  "names": ["GeForce GT 740M", "NVIDIA GeForce GT 740M"],
	  "vendor": "NVIDIA",
	  "performance": 787
	}, {
	  "names": ["GeForce GT 745A"],
	  "vendor": "NVIDIA",
	  "performance": 1144
	}, {
	  "names": ["GeForce GT 745M", "NVIDIA GeForce GT 745M"],
	  "vendor": "NVIDIA",
	  "performance": 977
	}, {
	  "names": ["GeForce GT 750M", "NVIDIA GeForce GT 750M"],
	  "vendor": "NVIDIA",
	  "performance": 1358
	}, {
	  "names": ["GeForce GT 755M", "NVIDIA GeForce GT 755M"],
	  "vendor": "NVIDIA",
	  "performance": 1641
	}, {
	  "names": ["GeForce GT 820M"],
	  "vendor": "NVIDIA",
	  "performance": 669
	}, {
	  "names": ["GeForce GTX 1050", "NVIDIA GeForce GTX 1050 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 5314
	}, {
	  "names": ["GeForce GTX 1050 (Mobile)", "GeForce GTX 1050 Mobile", "NVIDIA GeForce GTX 1050 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 4462
	}, {
	  "names": ["GeForce GTX 1050 Ti", "NVIDIA GeForce GTX 1050 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 6367
	}, {
	  "names": ["GeForce GTX 1050 Ti (Mobile)", "GeForce GTX 1050 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 5919
	}, {
	  "names": ["GeForce GTX 1050 Ti with Max-Q Design", "GeForce GTX 1050 Ti Max-Q", "NVIDIA GeForce GTX 1050 Ti Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 5599
	}, {
	  "names": ["GeForce GTX 1050 with Max-Q Design", "GeForce GTX 1050 Max-Q", "NVIDIA GeForce GTX 1050 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 3945
	}, {
	  "names": ["GeForce GTX 1060", "GeForce GTX 1060 Mobile", "NVIDIA GeForce GTX 1060 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 10116
	}, {
	  "names": ["GeForce GTX 1060 (Mobile)", "NVIDIA GeForce GTX 1060 (Desktop)"],
	  "performance": 8161
	}, {
	  "names": ["GeForce GTX 1060 with Max-Q Design", "GeForce GTX 1060 Max-Q", "NVIDIA GeForce GTX 1060 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 8091
	}, {
	  "names": ["GeForce GTX 1070", "NVIDIA GeForce GTX 1070 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 13326
	}, {
	  "names": ["GeForce GTX 1070 (Mobile)", "GeForce GTX 1070 Mobile", "NVIDIA GeForce GTX 1070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 10465
	}, {
	  "names": ["GeForce GTX 1070 Ti", "NVIDIA GeForce GTX 1070 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 14045
	}, {
	  "names": ["GeForce GTX 1070 with Max-Q Design", "GeForce GTX 1070 Max-Q", "NVIDIA GeForce GTX 1070 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 10176
	}, {
	  "names": ["GeForce GTX 1080", "NVIDIA GeForce GTX 1080 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 14788
	}, {
	  "names": ["GeForce GTX 1080 Ti", "NVIDIA GeForce GTX 1080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 17658
	}, {
	  "names": ["GeForce GTX 1080 with Max-Q Design", "GeForce GTX 1080 Max-Q", "NVIDIA GeForce GTX 1080 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 11371
	}, {
	  "names": ["GeForce GTX 1650", "NVIDIA GeForce GTX 1650 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 7722
	}, {
	  "names": ["GeForce GTX 1650 (Mobile)", "GeForce GTX 1650 Mobile", "NVIDIA GeForce GTX 1650 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 6969
	}, {
	  "names": ["GeForce GTX 1650 Ti", "NVIDIA GeForce GTX 1650 Ti (Desktop)"],
	  "performance": 7565
	}, {
	  "names": ["GeForce GTX 1650 Ti with Max-Q Design", "GeForce GTX 1650 Max-Q", "NVIDIA GeForce GTX 1650 Ti Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 6126
	}, {
	  "names": ["GeForce GTX 1650 with Max-Q Design", "NVIDIA GeForce GTX 1650 Max-Q"],
	  "performance": 5825
	}, {
	  "names": ["GeForce GTX 1660", "NVIDIA GeForce GTX 1660 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 11543
	}, {
	  "names": ["GeForce GTX 1660 SUPER", "NVIDIA GeForce GTX 1660 Super (Desktop)"],
	  "performance": 12668
	}, {
	  "names": ["GeForce GTX 1660 Ti", "NVIDIA GeForce GTX 1660 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12110
	}, {
	  "names": ["GeForce GTX 460 v2"],
	  "vendor": "NVIDIA",
	  "performance": 2012
	}, {
	  "names": ["GeForce GTX 485M", "NVIDIA GeForce GTX 485M"],
	  "vendor": "NVIDIA",
	  "performance": 2401
	}, {
	  "names": ["GeForce GTX 550 Ti", "NVIDIA GeForce GTX 550 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 1577
	}, {
	  "names": ["GeForce GTX 555", "GeForce GTX 555 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 1935
	}, {
	  "names": ["GeForce GTX 560", "NVIDIA GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 2716
	}, {
	  "names": ["GeForce GTX 560 SE"],
	  "vendor": "NVIDIA",
	  "performance": 1880
	}, {
	  "names": ["GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3063
	}, {
	  "names": ["GeForce GTX 560M", "NVIDIA GeForce GTX 560M"],
	  "vendor": "NVIDIA",
	  "performance": 1332
	}, {
	  "names": ["GeForce GTX 570M", "NVIDIA GeForce GTX 570M"],
	  "vendor": "NVIDIA",
	  "performance": 1998
	}, {
	  "names": ["GeForce GTX 580M", "NVIDIA GeForce GTX 580M"],
	  "vendor": "NVIDIA",
	  "performance": 2279
	}, {
	  "names": ["GeForce GTX 590", "NVIDIA GeForce GTX 590"],
	  "vendor": "NVIDIA",
	  "performance": 3340
	}, {
	  "names": ["GeForce GTX 645", "GeForce GTX 645 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 1885
	}, {
	  "names": ["GeForce GTX 650"],
	  "vendor": "NVIDIA",
	  "performance": 1760
	}, {
	  "names": ["GeForce GTX 650 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 2537
	}, {
	  "names": ["GeForce GTX 650 Ti BOOST", "GeForce GTX 650 Ti Boost"],
	  "vendor": "NVIDIA",
	  "performance": 3269
	}, {
	  "names": ["GeForce GTX 660", "NVIDIA GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3934
	}, {
	  "names": ["GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 4364
	}, {
	  "names": ["GeForce GTX 660M", "NVIDIA GeForce GTX 660M"],
	  "vendor": "NVIDIA",
	  "performance": 1465
	}, {
	  "names": ["GeForce GTX 670"],
	  "vendor": "NVIDIA",
	  "performance": 5308
	}, {
	  "names": ["GeForce GTX 670M", "NVIDIA GeForce GTX 670M"],
	  "vendor": "NVIDIA",
	  "performance": 1732
	}, {
	  "names": ["GeForce GTX 670MX", "NVIDIA GeForce GTX 670MX"],
	  "vendor": "NVIDIA",
	  "performance": 1830
	}, {
	  "names": ["GeForce GTX 675M", "NVIDIA GeForce GTX 675M"],
	  "vendor": "NVIDIA",
	  "performance": 2025
	}, {
	  "names": ["GeForce GTX 675MX", "NVIDIA GeForce GTX 675MX"],
	  "vendor": "NVIDIA",
	  "performance": 1972
	}, {
	  "names": ["GeForce GTX 680", "NVIDIA GeForce GTX 680"],
	  "vendor": "NVIDIA",
	  "performance": 5550
	}, {
	  "names": ["GeForce GTX 680M", "NVIDIA GeForce GTX 680M"],
	  "vendor": "NVIDIA",
	  "performance": 3166
	}, {
	  "names": ["GeForce GTX 680MX", "GeForce GTX 680MX Mac Edition", "NVIDIA GeForce GTX 680MX"],
	  "vendor": "NVIDIA",
	  "performance": 4271
	}, {
	  "names": ["GeForce GTX 690"],
	  "vendor": "NVIDIA",
	  "performance": 5790
	}, {
	  "names": ["GeForce GTX 745", "GeForce GTX 745 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2201
	}, {
	  "names": ["GeForce GTX 750", "NVIDIA GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3416
	}, {
	  "names": ["GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3939
	}, {
	  "names": ["GeForce GTX 760", "NVIDIA GeForce GTX 760"],
	  "vendor": "NVIDIA",
	  "performance": 4747
	}, {
	  "names": ["GeForce GTX 760 Ti", "GeForce GTX 760 Ti OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5119
	}, {
	  "names": ["GeForce GTX 760 Ti OEM", "GeForce GTX 760 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5225
	}, {
	  "names": ["GeForce GTX 760A"],
	  "vendor": "NVIDIA",
	  "performance": 1281
	}, {
	  "names": ["GeForce GTX 760M", "NVIDIA GeForce GTX 760M"],
	  "vendor": "NVIDIA",
	  "performance": 1718
	}, {
	  "names": ["GeForce GTX 765M", "NVIDIA GeForce GTX 765M"],
	  "vendor": "NVIDIA",
	  "performance": 1999
	}, {
	  "names": ["GeForce GTX 770"],
	  "vendor": "NVIDIA",
	  "performance": 5874
	}, {
	  "names": ["GeForce GTX 770M", "NVIDIA GeForce GTX 770M SLI"],
	  "performance": 2791
	}, {
	  "names": ["GeForce GTX 775M", "GeForce GTX 775M Mac Edition", "NVIDIA GeForce GTX 775M"],
	  "vendor": "NVIDIA",
	  "performance": 4222
	}, {
	  "names": ["GeForce GTX 780", "NVIDIA GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 8010
	}, {
	  "names": ["GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 9213
	}, {
	  "names": ["GeForce GTX 780M", "NVIDIA GeForce GTX 780M"],
	  "vendor": "NVIDIA",
	  "performance": 3902
	}, {
	  "names": ["GeForce GTX 850A"],
	  "vendor": "NVIDIA",
	  "performance": 1050
	}, {
	  "names": ["GeForce GTX 850M", "NVIDIA GeForce GTX 850M"],
	  "vendor": "NVIDIA",
	  "performance": 2601
	}, {
	  "names": ["GeForce GTX 860M", "NVIDIA GeForce GTX 860M"],
	  "vendor": "NVIDIA",
	  "performance": 3300
	}, {
	  "names": ["GeForce GTX 870M", "NVIDIA GeForce GTX 870M"],
	  "vendor": "NVIDIA",
	  "performance": 3406
	}, {
	  "names": ["GeForce GTX 880M", "NVIDIA GeForce GTX 880M"],
	  "vendor": "NVIDIA",
	  "performance": 4008
	}, {
	  "names": ["GeForce GTX 950", "NVIDIA GeForce GTX 950"],
	  "vendor": "NVIDIA",
	  "performance": 5382
	}, {
	  "names": ["GeForce GTX 950A"],
	  "vendor": "NVIDIA",
	  "performance": 2432
	}, {
	  "names": ["GeForce GTX 950M", "NVIDIA GeForce GTX 950M"],
	  "vendor": "NVIDIA",
	  "performance": 2645
	}, {
	  "names": ["GeForce GTX 960", "NVIDIA GeForce GTX 960"],
	  "vendor": "NVIDIA",
	  "performance": 5997
	}, {
	  "names": ["GeForce GTX 960A"],
	  "vendor": "NVIDIA",
	  "performance": 2411
	}, {
	  "names": ["GeForce GTX 960M", "NVIDIA GeForce GTX 960M"],
	  "vendor": "NVIDIA",
	  "performance": 3497
	}, {
	  "names": ["GeForce GTX 965M", "NVIDIA GeForce GTX 965M"],
	  "vendor": "NVIDIA",
	  "performance": 3906
	}, {
	  "names": ["GeForce GTX 970", "NVIDIA GeForce GTX 970"],
	  "vendor": "NVIDIA",
	  "performance": 9669
	}, {
	  "names": ["GeForce GTX 970M", "NVIDIA GeForce GTX 970M"],
	  "vendor": "NVIDIA",
	  "performance": 5764
	}, {
	  "names": ["GeForce GTX 980", "NVIDIA GeForce GTX 980"],
	  "vendor": "NVIDIA",
	  "performance": 11062
	}, {
	  "names": ["GeForce GTX 980 Ti", "NVIDIA GeForce GTX 980 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 13817
	}, {
	  "names": ["GeForce GTX 980M", "NVIDIA GeForce GTX 980M"],
	  "vendor": "NVIDIA",
	  "performance": 7366
	}, {
	  "names": ["GeForce GTX Titan", "GeForce GTX TITAN"],
	  "vendor": "NVIDIA",
	  "performance": 8702
	}, {
	  "names": ["GeForce GTX TITAN Black", "GeForce GTX TITAN BLACK"],
	  "vendor": "NVIDIA",
	  "performance": 9122
	}, {
	  "names": ["GeForce GTX TITAN X"],
	  "vendor": "NVIDIA",
	  "performance": 12815
	}, {
	  "names": ["GeForce GTX TITAN Z"],
	  "vendor": "NVIDIA",
	  "performance": 8238
	}, {
	  "names": ["GeForce MX110", "NVIDIA GeForce MX110"],
	  "vendor": "NVIDIA",
	  "performance": 1481
	}, {
	  "names": ["GeForce MX130", "NVIDIA GeForce MX130"],
	  "vendor": "NVIDIA",
	  "performance": 1923
	}, {
	  "names": ["GeForce MX150", "NVIDIA GeForce MX150"],
	  "vendor": "NVIDIA",
	  "performance": 2365
	}, {
	  "names": ["GeForce MX230", "NVIDIA GeForce MX230"],
	  "vendor": "NVIDIA",
	  "performance": 1957
	}, {
	  "names": ["GeForce MX330", "NVIDIA GeForce MX330"],
	  "performance": 2719
	}, {
	  "names": ["GeForce MX350", "NVIDIA GeForce MX350"],
	  "performance": 3007
	}, {
	  "names": ["GeForce MX450", "NVIDIA GeForce MX450"],
	  "performance": 3667
	}, {
	  "names": ["GeForce RTX 2060", "NVIDIA GeForce RTX 2060 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 14009
	}, {
	  "names": ["GeForce RTX 2060 (Mobile)", "GeForce RTX 2060 Mobile", "NVIDIA GeForce RTX 2060 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 11355
	}, {
	  "names": ["GeForce RTX 2060 SUPER", "NVIDIA GeForce RTX 2060 Super (Desktop)"],
	  "performance": 16397
	}, {
	  "names": ["GeForce RTX 2060 with Max-Q Design", "NVIDIA GeForce RTX 2060 Max-Q"],
	  "performance": 9739
	}, {
	  "names": ["GeForce RTX 2070", "NVIDIA GeForce RTX 2070 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 16115
	}, {
	  "names": ["GeForce RTX 2070 (Mobile)", "GeForce RTX 2070 Mobile", "NVIDIA GeForce RTX 2070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12354
	}, {
	  "names": ["GeForce RTX 2070 SUPER", "NVIDIA GeForce RTX 2070 Super Mobile"],
	  "performance": 18101
	}, {
	  "names": ["GeForce RTX 2070 Super with Max-Q Design", "GeForce RTX 2070 Max-Q", "NVIDIA GeForce RTX 2070 Super Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 14784
	}, {
	  "names": ["GeForce RTX 2070 with Max-Q Design", "NVIDIA GeForce RTX 2070 Max-Q"],
	  "performance": 12314
	}, {
	  "names": ["GeForce RTX 2080", "NVIDIA GeForce RTX 2080 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 18576
	}, {
	  "names": ["GeForce RTX 2080 (Mobile)", "GeForce RTX 2080 Mobile", "NVIDIA GeForce RTX 2080 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 15107
	}, {
	  "names": ["GeForce RTX 2080 SUPER", "NVIDIA GeForce RTX 2080 Super Mobile"],
	  "performance": 19380
	}, {
	  "names": ["GeForce RTX 2080 Super with Max-Q Design", "GeForce RTX 2080 Max-Q", "NVIDIA GeForce RTX 2080 Super Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 13894
	}, {
	  "names": ["GeForce RTX 2080 Ti", "NVIDIA GeForce RTX 2080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 21574
	}, {
	  "names": ["GeForce RTX 2080 with Max-Q Design", "NVIDIA GeForce RTX 2080 Max-Q"],
	  "performance": 13943
	}, {
	  "names": ["GeForce RTX 3070", "NVIDIA GeForce RTX 3070"],
	  "performance": 21254
	}, {
	  "names": ["GeForce RTX 3080", "NVIDIA GeForce RTX 3080"],
	  "performance": 23738
	}, {
	  "names": ["GeForce RTX 3090", "NVIDIA GeForce RTX 3090"],
	  "performance": 25166
	}, {
	  "names": ["GRID K1"],
	  "vendor": "NVIDIA",
	  "performance": 811
	}, {
	  "names": ["GRID K120Q"],
	  "vendor": "NVIDIA",
	  "performance": 293
	}, {
	  "names": ["GRID K140Q"],
	  "vendor": "NVIDIA",
	  "performance": 728
	}, {
	  "names": ["GRID K160Q"],
	  "vendor": "NVIDIA",
	  "performance": 740
	}, {
	  "names": ["GRID K180Q"],
	  "vendor": "NVIDIA",
	  "performance": 557
	}, {
	  "names": ["GRID K2"],
	  "vendor": "NVIDIA",
	  "performance": 3176
	}, {
	  "names": ["GRID K220Q"],
	  "vendor": "NVIDIA",
	  "performance": 912
	}, {
	  "names": ["GRID K240Q"],
	  "vendor": "NVIDIA",
	  "performance": 2144
	}, {
	  "names": ["GRID K260Q"],
	  "vendor": "NVIDIA",
	  "performance": 2941
	}, {
	  "names": ["GRID K280Q"],
	  "vendor": "NVIDIA",
	  "performance": 2363
	}, {
	  "names": ["GRID K520"],
	  "vendor": "NVIDIA",
	  "performance": 3177
	}, {
	  "names": ["GRID M10-8Q"],
	  "vendor": "NVIDIA",
	  "performance": 2606
	}, {
	  "names": ["GRID M6-8Q"],
	  "vendor": "NVIDIA",
	  "performance": 3568
	}, {
	  "names": ["GRID M60-1Q"],
	  "vendor": "NVIDIA",
	  "performance": 4251
	}, {
	  "names": ["GRID M60-2Q"],
	  "vendor": "NVIDIA",
	  "performance": 5291
	}, {
	  "names": ["GRID M60-8Q"],
	  "vendor": "NVIDIA",
	  "performance": 3884
	}, {
	  "names": ["HD", "HD Graphics", "Intel HD Graphics (Broadwell)"],
	  "vendor": "Intel",
	  "performance": 143
	}, {
	  "names": ["Intel HD 2000", "Intel HD Graphics 2000"],
	  "performance": 213
	}, {
	  "names": ["Intel HD 3000", "Intel HD Graphics 3000"],
	  "performance": 256
	}, {
	  "names": ["Intel HD 4000", "Intel HD Graphics 4000"],
	  "performance": 330
	}, {
	  "names": ["Intel HD 4400", "Intel HD Graphics 4400"],
	  "performance": 529
	}, {
	  "names": ["Intel HD 4600", "Intel HD Graphics 4600"],
	  "performance": 633
	}, {
	  "names": ["Intel HD 500", "Intel HD Graphics 500"],
	  "performance": 306
	}, {
	  "names": ["Intel HD 5000", "Intel HD Graphics 5000"],
	  "performance": 563
	}, {
	  "names": ["Intel HD 505", "Intel HD Graphics 505"],
	  "performance": 357
	}, {
	  "names": ["Intel HD 510", "Intel HD Graphics 510"],
	  "performance": 622
	}, {
	  "names": ["Intel HD 515", "Intel HD Graphics 515"],
	  "performance": 610
	}, {
	  "names": ["Intel HD 520", "Intel HD Graphics 520"],
	  "performance": 860
	}, {
	  "names": ["Intel HD 530", "Intel HD Graphics 530"],
	  "performance": 990
	}, {
	  "names": ["Intel HD 5300", "Intel HD Graphics 5300"],
	  "performance": 411
	}, {
	  "names": ["Intel HD 5500", "Intel HD Graphics 5500"],
	  "performance": 580
	}, {
	  "names": ["Intel HD 5600", "Intel HD Graphics 5600"],
	  "performance": 712
	}, {
	  "names": ["Intel HD 6000", "Intel HD Graphics 6000"],
	  "performance": 844
	}, {
	  "names": ["Intel HD 610", "Intel HD Graphics 610"],
	  "performance": 666
	}, {
	  "names": ["Intel HD 615", "Intel HD Graphics 615"],
	  "performance": 757
	}, {
	  "names": ["Intel HD 630", "Intel HD Graphics 630"],
	  "performance": 1176
	}, {
	  "names": ["Intel HD Graphics 620", "HD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 924
	}, {
	  "names": ["Intel HD P530", "Intel HD Graphics P530"],
	  "performance": 1454
	}, {
	  "names": ["Intel HD P630", "Intel HD Graphics P630"],
	  "performance": 1276
	}, {
	  "names": ["Intel Iris 5100", "Intel Iris Graphics 5100"],
	  "performance": 763
	}, {
	  "names": ["Intel Iris 540", "Intel Iris Graphics 540"],
	  "performance": 1227
	}, {
	  "names": ["Intel Iris 550", "Intel Iris Graphics 550"],
	  "performance": 1420
	}, {
	  "names": ["Intel Iris 6100", "Intel Iris Graphics 6100"],
	  "performance": 850
	}, {
	  "names": ["Intel Iris 650", "Intel Iris Plus Graphics 650"],
	  "performance": 1795
	}, {
	  "names": ["Intel Iris Plus", "Intel Iris Plus Graphics G7 (Ice Lake 64 EU)"],
	  "performance": 1887
	}, {
	  "names": ["Intel Iris Plus 640", "Intel Iris Plus Graphics 640"],
	  "performance": 1316
	}, {
	  "names": ["Intel Iris Plus 645", "Intel Iris Plus Graphics 645"],
	  "performance": 1789
	}, {
	  "names": ["Intel Iris Plus 655", "Intel Iris Plus Graphics 655"],
	  "performance": 1813
	}, {
	  "names": ["Intel Iris Pro 5200", "Intel Iris Pro Graphics 5200"],
	  "performance": 1015
	}, {
	  "names": ["Intel Iris Pro 580", "Intel Iris Pro Graphics 580"],
	  "performance": 2010
	}, {
	  "names": ["Intel Iris Pro Graphics 6200", "Iris Pro Graphics 6200"],
	  "vendor": "Intel",
	  "performance": 1490
	}, {
	  "names": ["Intel Iris Pro P580", "Intel Iris Pro Graphics P580"],
	  "performance": 2169
	}, {
	  "names": ["Intel Iris Xe", "Intel Iris Xe MAX Graphics"],
	  "performance": 3022
	}, {
	  "names": ["Intel UHD", "Intel UHD Graphics Xe G4 48EUs"],
	  "performance": 1925
	}, {
	  "names": ["Intel UHD 600", "Intel UHD Graphics 600"],
	  "performance": 333
	}, {
	  "names": ["Intel UHD 605", "Intel UHD Graphics 605"],
	  "performance": 375
	}, {
	  "names": ["Intel UHD 610", "Intel UHD Graphics 610"],
	  "performance": 720
	}, {
	  "names": ["Intel UHD 615", "Intel UHD Graphics 615"],
	  "performance": 767
	}, {
	  "names": ["Intel UHD 617", "Intel UHD Graphics 617"],
	  "performance": 858
	}, {
	  "names": ["Intel UHD 620", "Intel UHD Graphics 620"],
	  "performance": 889
	}, {
	  "names": ["Intel UHD 630", "Intel UHD Graphics 630"],
	  "performance": 1511
	}, {
	  "names": ["Intel UHD Graphics 620", "UHD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 1054
	}, {
	  "names": ["Intel UHD P630", "Intel UHD Graphics P630"],
	  "performance": 2926
	}, {
	  "names": ["Mobility Radeon HD 5570"],
	  "vendor": "ATI",
	  "performance": 551
	}, {
	  "names": ["Mobility Radeon. HD 5470", "Radeon HD 5470"],
	  "vendor": "ATI",
	  "performance": 215
	}, {
	  "names": ["MxGPU", "Radeon Instinct MI25 MxGPU"],
	  "vendor": "AMD",
	  "performance": 1826
	}, {
	  "names": ["NVIDIA TITAN X", "NVIDIA Titan X Pascal"],
	  "performance": 13660
	}, {
	  "names": ["NVIDIA TITAN Xp", "TITAN Xp"],
	  "vendor": "NVIDIA",
	  "performance": 18280
	}, {
	  "names": ["NVS 300"],
	  "vendor": "NVIDIA",
	  "performance": 112
	}, {
	  "names": ["NVS 310"],
	  "vendor": "NVIDIA",
	  "performance": 250
	}, {
	  "names": ["NVS 315"],
	  "vendor": "NVIDIA",
	  "performance": 299
	}, {
	  "names": ["NVS 4200M", "NVIDIA NVS 4200M"],
	  "vendor": "NVIDIA",
	  "performance": 245
	}, {
	  "names": ["NVS 510"],
	  "vendor": "NVIDIA",
	  "performance": 763
	}, {
	  "names": ["NVS 5200M", "NVIDIA NVS 5200M"],
	  "vendor": "NVIDIA",
	  "performance": 548
	}, {
	  "names": ["NVS 5400M", "NVIDIA NVS 5400M"],
	  "vendor": "NVIDIA",
	  "performance": 642
	}, {
	  "names": ["NVS 810"],
	  "vendor": "NVIDIA",
	  "performance": 1015
	}, {
	  "names": ["P104-100"],
	  "vendor": "NVIDIA",
	  "performance": 4450
	}, {
	  "names": ["P106-090"],
	  "vendor": "NVIDIA",
	  "performance": 2898
	}, {
	  "names": ["P106-100"],
	  "vendor": "NVIDIA",
	  "performance": 5023
	}, {
	  "names": ["Quadro 1000M", "NVIDIA Quadro 1000M"],
	  "vendor": "NVIDIA",
	  "performance": 593
	}, {
	  "names": ["Quadro 2000D"],
	  "vendor": "NVIDIA",
	  "performance": 989
	}, {
	  "names": ["Quadro 2000M", "NVIDIA Quadro 2000M"],
	  "vendor": "NVIDIA",
	  "performance": 824
	}, {
	  "names": ["Quadro 3000M", "NVIDIA Quadro 3000M"],
	  "vendor": "NVIDIA",
	  "performance": 1026
	}, {
	  "names": ["Quadro 400"],
	  "vendor": "NVIDIA",
	  "performance": 163
	}, {
	  "names": ["Quadro 4000M", "NVIDIA Quadro 4000M"],
	  "vendor": "NVIDIA",
	  "performance": 1204
	}, {
	  "names": ["Quadro 410"],
	  "vendor": "NVIDIA",
	  "performance": 446
	}, {
	  "names": ["Quadro 5000", "NVIDIA Quadro RTX 5000 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 2000
	}, {
	  "names": ["Quadro 500M"],
	  "vendor": "NVIDIA",
	  "performance": 664
	}, {
	  "names": ["Quadro 5010M", "NVIDIA Quadro 5010M"],
	  "vendor": "NVIDIA",
	  "performance": 2001
	}, {
	  "names": ["Quadro 7000"],
	  "vendor": "NVIDIA",
	  "performance": 3505
	}, {
	  "names": ["Quadro GP100"],
	  "vendor": "NVIDIA",
	  "performance": 12663
	}, {
	  "names": ["Quadro GV100"],
	  "vendor": "NVIDIA",
	  "performance": 12721
	}, {
	  "names": ["Quadro K1000M", "NVIDIA Quadro K1000M"],
	  "vendor": "NVIDIA",
	  "performance": 774
	}, {
	  "names": ["Quadro K1100M", "NVIDIA Quadro K1100M"],
	  "vendor": "NVIDIA",
	  "performance": 1110
	}, {
	  "names": ["Quadro K1200"],
	  "vendor": "NVIDIA",
	  "performance": 2876
	}, {
	  "names": ["Quadro K2000"],
	  "vendor": "NVIDIA",
	  "performance": 1573
	}, {
	  "names": ["Quadro K2000D"],
	  "vendor": "NVIDIA",
	  "performance": 1646
	}, {
	  "names": ["Quadro K2000M", "NVIDIA Quadro K2000M"],
	  "vendor": "NVIDIA",
	  "performance": 1039
	}, {
	  "names": ["Quadro K2100M", "NVIDIA Quadro K2100M"],
	  "vendor": "NVIDIA",
	  "performance": 1400
	}, {
	  "names": ["Quadro K2200"],
	  "vendor": "NVIDIA",
	  "performance": 3561
	}, {
	  "names": ["Quadro K2200M"],
	  "vendor": "NVIDIA",
	  "performance": 3893
	}, {
	  "names": ["Quadro K3000M", "NVIDIA Quadro K3000M"],
	  "vendor": "NVIDIA",
	  "performance": 1657
	}, {
	  "names": ["Quadro K3100M", "NVIDIA Quadro K3100M"],
	  "vendor": "NVIDIA",
	  "performance": 2314
	}, {
	  "names": ["Quadro K4000"],
	  "vendor": "NVIDIA",
	  "performance": 2687
	}, {
	  "names": ["Quadro K4000M", "NVIDIA Quadro K4000M"],
	  "vendor": "NVIDIA",
	  "performance": 2109
	}, {
	  "names": ["Quadro K4100M", "NVIDIA Quadro K4100M"],
	  "vendor": "NVIDIA",
	  "performance": 2454
	}, {
	  "names": ["Quadro K420"],
	  "vendor": "NVIDIA",
	  "performance": 771
	}, {
	  "names": ["Quadro K4200"],
	  "vendor": "NVIDIA",
	  "performance": 4261
	}, {
	  "names": ["Quadro K5000"],
	  "vendor": "NVIDIA",
	  "performance": 3922
	}, {
	  "names": ["Quadro K5000M", "NVIDIA Quadro K5000M"],
	  "vendor": "NVIDIA",
	  "performance": 3133
	}, {
	  "names": ["Quadro K500M", "NVIDIA Quadro K500M"],
	  "vendor": "NVIDIA",
	  "performance": 480
	}, {
	  "names": ["Quadro K5100M", "NVIDIA Quadro K5100M"],
	  "vendor": "NVIDIA",
	  "performance": 3009
	}, {
	  "names": ["Quadro K510M", "NVIDIA Quadro K510M"],
	  "vendor": "NVIDIA",
	  "performance": 651
	}, {
	  "names": ["Quadro K5200"],
	  "vendor": "NVIDIA",
	  "performance": 5922
	}, {
	  "names": ["Quadro K600"],
	  "vendor": "NVIDIA",
	  "performance": 776
	}, {
	  "names": ["Quadro K6000"],
	  "vendor": "NVIDIA",
	  "performance": 8146
	}, {
	  "names": ["Quadro K610M", "NVIDIA Quadro K610M"],
	  "vendor": "NVIDIA",
	  "performance": 726
	}, {
	  "names": ["Quadro K620"],
	  "vendor": "NVIDIA",
	  "performance": 2282
	}, {
	  "names": ["Quadro K620M", "NVIDIA Quadro K620M"],
	  "vendor": "NVIDIA",
	  "performance": 1200
	}, {
	  "names": ["Quadro M1000M", "NVIDIA Quadro M1000M"],
	  "vendor": "NVIDIA",
	  "performance": 3027
	}, {
	  "names": ["Quadro M1200", "Quadro M1200 Mobile", "NVIDIA Quadro M1200"],
	  "vendor": "NVIDIA",
	  "performance": 3613
	}, {
	  "names": ["Quadro M2000"],
	  "vendor": "NVIDIA",
	  "performance": 4012
	}, {
	  "names": ["Quadro M2000M", "NVIDIA Quadro M2000M"],
	  "vendor": "NVIDIA",
	  "performance": 3561
	}, {
	  "names": ["Quadro M2200", "Quadro M2200 Mobile", "NVIDIA Quadro M2200"],
	  "vendor": "NVIDIA",
	  "performance": 4457
	}, {
	  "names": ["Quadro M3000M", "NVIDIA Quadro M3000M"],
	  "vendor": "NVIDIA",
	  "performance": 5446
	}, {
	  "names": ["Quadro M4000"],
	  "vendor": "NVIDIA",
	  "performance": 6537
	}, {
	  "names": ["Quadro M4000M", "NVIDIA Quadro M4000M"],
	  "vendor": "NVIDIA",
	  "performance": 6829
	}, {
	  "names": ["Quadro M5000"],
	  "vendor": "NVIDIA",
	  "performance": 9159
	}, {
	  "names": ["Quadro M5000M", "NVIDIA Quadro M5000M"],
	  "vendor": "NVIDIA",
	  "performance": 6872
	}, {
	  "names": ["Quadro M500M", "NVIDIA Quadro M500M"],
	  "vendor": "NVIDIA",
	  "performance": 1109
	}, {
	  "names": ["Quadro M520", "Quadro M520 Mobile", "NVIDIA Quadro M520"],
	  "vendor": "NVIDIA",
	  "performance": 1956
	}, {
	  "names": ["Quadro M5500", "Quadro M5500 Mobile", "NVIDIA Quadro M5500"],
	  "vendor": "NVIDIA",
	  "performance": 7915
	}, {
	  "names": ["Quadro M6000"],
	  "vendor": "NVIDIA",
	  "performance": 12143
	}, {
	  "names": ["Quadro M600M", "NVIDIA Quadro M600M"],
	  "vendor": "NVIDIA",
	  "performance": 2142
	}, {
	  "names": ["Quadro M620", "Quadro M620 Mobile", "NVIDIA Quadro M620"],
	  "vendor": "NVIDIA",
	  "performance": 2881
	}, {
	  "names": ["Quadro P1000", "NVIDIA Quadro P1000"],
	  "vendor": "NVIDIA",
	  "performance": 4369
	}, {
	  "names": ["Quadro P2000", "NVIDIA Quadro P2000"],
	  "vendor": "NVIDIA",
	  "performance": 7189
	}, {
	  "names": ["Quadro P2000 with Max-Q Design", "NVIDIA Quadro P2000 Max-Q"],
	  "performance": 5122
	}, {
	  "names": ["Quadro P3000", "Quadro P3000 Mobile", "NVIDIA Quadro P3000"],
	  "vendor": "NVIDIA",
	  "performance": 6919
	}, {
	  "names": ["Quadro P3200", "Quadro P3200 Mobile", "NVIDIA Quadro P3200"],
	  "vendor": "NVIDIA",
	  "performance": 7719
	}, {
	  "names": ["Quadro P3200 with Max-Q Design", "Quadro P3200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 8942
	}, {
	  "names": ["Quadro P400"],
	  "vendor": "NVIDIA",
	  "performance": 1642
	}, {
	  "names": ["Quadro P4000", "NVIDIA Quadro P4000"],
	  "vendor": "NVIDIA",
	  "performance": 11396
	}, {
	  "names": ["Quadro P4000 with Max-Q Design", "Quadro P4000 Max-Q", "NVIDIA Quadro P4000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9083
	}, {
	  "names": ["Quadro P4200", "Quadro P4200 Mobile", "NVIDIA Quadro P4200"],
	  "vendor": "NVIDIA",
	  "performance": 11820
	}, {
	  "names": ["Quadro P500", "Quadro P500 Mobile", "NVIDIA Quadro P500"],
	  "vendor": "NVIDIA",
	  "performance": 1743
	}, {
	  "names": ["Quadro P5000", "NVIDIA Quadro P5000"],
	  "vendor": "NVIDIA",
	  "performance": 11416
	}, {
	  "names": ["Quadro P520", "NVIDIA Quadro P520"],
	  "performance": 2217
	}, {
	  "names": ["Quadro P5200", "Quadro P5200 Mobile", "NVIDIA Quadro P5200"],
	  "vendor": "NVIDIA",
	  "performance": 11559
	}, {
	  "names": ["Quadro P5200 with Max-Q Design", "Quadro P5200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9796
	}, {
	  "names": ["Quadro P600", "NVIDIA Quadro P600"],
	  "vendor": "NVIDIA",
	  "performance": 3460
	}, {
	  "names": ["Quadro P6000"],
	  "vendor": "NVIDIA",
	  "performance": 15005
	}, {
	  "names": ["Quadro P620", "NVIDIA Quadro P620"],
	  "vendor": "NVIDIA",
	  "performance": 3668
	}, {
	  "names": ["Quadro RTX 3000", "NVIDIA Quadro RTX 3000 (Laptop)"],
	  "performance": 11284
	}, {
	  "names": ["Quadro RTX 3000 with Max-Q Design", "NVIDIA Quadro RTX 3000 Max-Q"],
	  "performance": 8697
	}, {
	  "names": ["Quadro RTX 4000", "NVIDIA Quadro RTX 4000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 15098
	}, {
	  "names": ["Quadro RTX 5000", "NVIDIA Quadro RTX 5000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 16628
	}, {
	  "names": ["Quadro RTX 6000"],
	  "vendor": "NVIDIA",
	  "performance": 20309
	}, {
	  "names": ["Quadro RTX 8000"],
	  "vendor": "NVIDIA",
	  "performance": 20448
	}, {
	  "names": ["Quadro T1000", "NVIDIA Quadro T1000 (Laptop)"],
	  "performance": 6528
	}, {
	  "names": ["Quadro T1000 with Max-Q Design", "NVIDIA Quadro T1000 Max-Q"],
	  "performance": 6755
	}, {
	  "names": ["Quadro T2000", "NVIDIA Quadro T2000 (Laptop)"],
	  "performance": 6874
	}, {
	  "names": ["Quadro T2000 with Max-Q Design", "NVIDIA Quadro T2000 Max-Q"],
	  "performance": 6729
	}, {
	  "names": ["Qualcomm Adreno 630 GPU", "Qualcomm Adreno 630"],
	  "performance": 249
	}, {
	  "names": ["Radeon 520", "Radeon 520 Mobile", "AMD Radeon 520"],
	  "vendor": "AMD",
	  "performance": 878
	}, {
	  "names": ["Radeon 530", "Radeon 530 Mobile", "AMD Radeon 530"],
	  "vendor": "AMD",
	  "performance": 912
	}, {
	  "names": ["Radeon 535", "Radeon 535 Mobile"],
	  "vendor": "AMD",
	  "performance": 1117
	}, {
	  "names": ["Radeon 540", "Radeon RX 540 Mobile", "AMD Radeon RX 540"],
	  "vendor": "AMD",
	  "performance": 1376
	}, {
	  "names": ["Radeon 540X", "Radeon 540X Mobile", "AMD Radeon 540X"],
	  "vendor": "AMD",
	  "performance": 1374
	}, {
	  "names": ["Radeon 550X", "Radeon 550X 640SP", "AMD Radeon RX 550X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 1564
	}, {
	  "names": ["Radeon 620", "AMD Radeon 620"],
	  "performance": 859
	}, {
	  "names": ["Radeon 625", "AMD Radeon 625"],
	  "performance": 1324
	}, {
	  "names": ["Radeon 630", "AMD Radeon 630"],
	  "performance": 1262
	}, {
	  "names": ["Radeon 6750M", "Radeon HD 6750M", "AMD Radeon HD 6750M"],
	  "vendor": "AMD",
	  "performance": 911
	}, {
	  "names": ["Radeon E6460"],
	  "vendor": "AMD",
	  "performance": 324
	}, {
	  "names": ["Radeon E6465"],
	  "vendor": "AMD",
	  "performance": 164
	}, {
	  "names": ["Radeon E6760", "Radeon E6760 MXM"],
	  "vendor": "AMD",
	  "performance": 973
	}, {
	  "names": ["Radeon E8860"],
	  "vendor": "AMD",
	  "performance": 1577
	}, {
	  "names": ["Radeon HD 6230"],
	  "vendor": "AMD",
	  "performance": 179
	}, {
	  "names": ["Radeon HD 6250", "AMD Radeon HD 6250"],
	  "vendor": "AMD",
	  "performance": 98
	}, {
	  "names": ["Radeon HD 6290", "AMD Radeon HD 6290"],
	  "vendor": "AMD",
	  "performance": 117
	}, {
	  "names": ["Radeon HD 6320", "Radeon HD 6320 IGP", "AMD Radeon HD 6320"],
	  "vendor": "AMD",
	  "performance": 144
	}, {
	  "names": ["RADEON HD 6350", "Radeon HD 6350"],
	  "vendor": "AMD",
	  "performance": 142
	}, {
	  "names": ["Radeon HD 6370D", "Radeon HD 6370D IGP"],
	  "vendor": "AMD",
	  "performance": 311
	}, {
	  "names": ["Radeon HD 6380G", "Radeon HD 6380G IGP", "AMD Radeon HD 6380G"],
	  "vendor": "AMD",
	  "performance": 213
	}, {
	  "names": ["Radeon HD 6410D", "Radeon HD 6410D IGP"],
	  "vendor": "AMD",
	  "performance": 217
	}, {
	  "names": ["Radeon HD 6430M", "AMD Radeon HD 6430M"],
	  "vendor": "AMD",
	  "performance": 193
	}, {
	  "names": ["Radeon HD 6450", "AMD Radeon HD 6450 GDDR5"],
	  "vendor": "AMD",
	  "performance": 199
	}, {
	  "names": ["Radeon HD 6450A"],
	  "vendor": "AMD",
	  "performance": 260
	}, {
	  "names": ["Radeon HD 6470M", "AMD Radeon HD 6470M"],
	  "vendor": "AMD",
	  "performance": 226
	}, {
	  "names": ["Radeon HD 6480G", "Radeon HD 6480G IGP", "AMD Radeon HD 6480G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 279
	}, {
	  "names": ["Radeon HD 6490M", "AMD Radeon HD 6490M"],
	  "vendor": "AMD",
	  "performance": 378
	}, {
	  "names": ["Radeon HD 6520G", "Radeon HD 6520G IGP", "AMD Radeon HD 6520G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 304
	}, {
	  "names": ["Radeon HD 6530D", "Radeon HD 6530D IGP"],
	  "vendor": "AMD",
	  "performance": 315
	}, {
	  "names": ["Radeon HD 6550A"],
	  "vendor": "AMD",
	  "performance": 708
	}, {
	  "names": ["Radeon HD 6550D", "Radeon HD 6550D IGP", "AMD Radeon HD 6550D"],
	  "vendor": "AMD",
	  "performance": 410
	}, {
	  "names": ["Radeon HD 6570"],
	  "vendor": "AMD",
	  "performance": 506
	}, {
	  "names": ["Radeon HD 6610M"],
	  "vendor": "AMD",
	  "performance": 565
	}, {
	  "names": ["Radeon HD 6620G", "Radeon HD 6620G IGP", "AMD Radeon HD 6620G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 386
	}, {
	  "names": ["Radeon HD 6630M", "AMD Radeon HD 6630M"],
	  "vendor": "AMD",
	  "performance": 685
	}, {
	  "names": ["Radeon HD 6650A"],
	  "vendor": "AMD",
	  "performance": 836
	}, {
	  "names": ["Radeon HD 6650M", "AMD Radeon HD 6650M"],
	  "vendor": "AMD",
	  "performance": 748
	}, {
	  "names": ["Radeon HD 6670"],
	  "vendor": "AMD",
	  "performance": 693
	}, {
	  "names": ["Radeon HD 6750"],
	  "vendor": "AMD",
	  "performance": 1055
	}, {
	  "names": ["Radeon HD 6750M", "Radeon HD 6750M Mac Edition"],
	  "vendor": "AMD",
	  "performance": 937
	}, {
	  "names": ["Radeon HD 6770"],
	  "vendor": "AMD",
	  "performance": 1224
	}, {
	  "names": ["Radeon HD 6770M", "AMD Radeon HD 6770M"],
	  "vendor": "AMD",
	  "performance": 964
	}, {
	  "names": ["Radeon HD 6790", "AMD Radeon HD 6790"],
	  "vendor": "AMD",
	  "performance": 1666
	}, {
	  "names": ["Radeon HD 6850 X2"],
	  "vendor": "AMD",
	  "performance": 2534
	}, {
	  "names": ["Radeon HD 6970M", "AMD Radeon HD 6970M"],
	  "vendor": "AMD",
	  "performance": 2270
	}, {
	  "names": ["Radeon HD 6990"],
	  "vendor": "AMD",
	  "performance": 2933
	}, {
	  "names": ["Radeon HD 7290", "Radeon HD 7290 IGP", "AMD Radeon HD 7290"],
	  "vendor": "AMD",
	  "performance": 115
	}, {
	  "names": ["Radeon HD 7310", "Radeon HD 7310 IGP", "AMD Radeon HD 7310"],
	  "vendor": "AMD",
	  "performance": 131
	}, {
	  "names": ["Radeon HD 7340", "Radeon HD 7340 IGP", "AMD Radeon HD 7340"],
	  "vendor": "AMD",
	  "performance": 152
	}, {
	  "names": ["Radeon HD 7350", "Radeon HD 7350 OEM"],
	  "vendor": "AMD",
	  "performance": 216
	}, {
	  "names": ["Radeon HD 7400G", "Radeon HD 7400G IGP", "AMD Radeon HD 7400G"],
	  "vendor": "AMD",
	  "performance": 300
	}, {
	  "names": ["Radeon HD 7420G", "Radeon HD 7420G IGP", "AMD Radeon HD 7420G"],
	  "vendor": "AMD",
	  "performance": 304
	}, {
	  "names": ["Radeon HD 7450", "Radeon HD 7450 OEM"],
	  "vendor": "AMD",
	  "performance": 237
	}, {
	  "names": ["Radeon HD 7450A"],
	  "vendor": "AMD",
	  "performance": 288
	}, {
	  "names": ["Radeon HD 7450M", "AMD Radeon HD 6620G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 330
	}, {
	  "names": ["Radeon HD 7470", "Radeon HD 7470 OEM"],
	  "vendor": "AMD",
	  "performance": 369
	}, {
	  "names": ["Radeon HD 7470M", "AMD Radeon HD 7470M"],
	  "vendor": "AMD",
	  "performance": 408
	}, {
	  "names": ["Radeon HD 7480D", "Radeon HD 7480D IGP", "AMD Radeon HD 7480D"],
	  "vendor": "AMD",
	  "performance": 296
	}, {
	  "names": ["Radeon HD 7500G", "Radeon HD 7500G IGP", "AMD Radeon HD 7500G + HD 7550M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 303
	}, {
	  "names": ["Radeon HD 7520G", "Radeon HD 7520G IGP", "AMD Radeon HD 7520G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 287
	}, {
	  "names": ["Radeon HD 7540D", "Radeon HD 7540D IGP"],
	  "vendor": "AMD",
	  "performance": 338
	}, {
	  "names": ["Radeon HD 7550M", "AMD Radeon HD 7550M"],
	  "vendor": "AMD",
	  "performance": 465
	}, {
	  "names": ["Radeon HD 7560D", "Radeon HD 7560D IGP", "AMD Radeon HD 7560D"],
	  "vendor": "AMD",
	  "performance": 479
	}, {
	  "names": ["Radeon HD 7570"],
	  "vendor": "AMD",
	  "performance": 629
	}, {
	  "names": ["Radeon HD 7570M", "AMD Radeon HD 7570M"],
	  "vendor": "AMD",
	  "performance": 465
	}, {
	  "names": ["Radeon HD 7600G", "Radeon HD 7600G IGP", "AMD Radeon HD 7600G"],
	  "vendor": "AMD",
	  "performance": 351
	}, {
	  "names": ["Radeon HD 7610M", "AMD Radeon HD 7640G + HD 7610M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 632
	}, {
	  "names": ["Radeon HD 7620G", "Radeon HD 7620G IGP", "AMD Radeon HD 7620G"],
	  "vendor": "AMD",
	  "performance": 346
	}, {
	  "names": ["Radeon HD 7640G", "Radeon HD 7640G IGP", "AMD Radeon HD 7640G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 457
	}, {
	  "names": ["Radeon HD 7650A"],
	  "vendor": "AMD",
	  "performance": 553
	}, {
	  "names": ["Radeon HD 7650M", "AMD Radeon HD 7650M"],
	  "vendor": "AMD",
	  "performance": 469
	}, {
	  "names": ["Radeon HD 7660D", "Radeon HD 7660D IGP", "AMD Radeon HD 7660D"],
	  "vendor": "AMD",
	  "performance": 499
	}, {
	  "names": ["Radeon HD 7660G", "Radeon HD 7660G IGP", "AMD Radeon HD 7660G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 482
	}, {
	  "names": ["Radeon HD 7670", "Radeon HD 7670 OEM"],
	  "vendor": "AMD",
	  "performance": 854
	}, {
	  "names": ["Radeon HD 7670A"],
	  "vendor": "AMD",
	  "performance": 1050
	}, {
	  "names": ["Radeon HD 7670M", "AMD Radeon HD 7670M"],
	  "vendor": "AMD",
	  "performance": 441
	}, {
	  "names": ["Radeon HD 7690M", "AMD Radeon HD 7690M"],
	  "vendor": "AMD",
	  "performance": 1003
	}, {
	  "names": ["Radeon HD 7690M XT", "AMD Radeon HD 7690M XT"],
	  "vendor": "AMD",
	  "performance": 1009
	}, {
	  "names": ["Radeon HD 7730"],
	  "vendor": "AMD",
	  "performance": 1246
	}, {
	  "names": ["Radeon HD 7730M", "AMD Radeon HD 7730M"],
	  "vendor": "AMD",
	  "performance": 693
	}, {
	  "names": ["Radeon HD 7750"],
	  "vendor": "AMD",
	  "performance": 1670
	}, {
	  "names": ["Radeon HD 7750M", "AMD Radeon HD 7750M"],
	  "vendor": "AMD",
	  "performance": 1191
	}, {
	  "names": ["Radeon HD 7770", "Radeon HD 7770 GHz Edition", "AMD Radeon HD 7770"],
	  "vendor": "AMD",
	  "performance": 2158
	}, {
	  "names": ["Radeon HD 7790"],
	  "vendor": "AMD",
	  "performance": 3090
	}, {
	  "names": ["Radeon HD 7850"],
	  "vendor": "AMD",
	  "performance": 3718
	}, {
	  "names": ["Radeon HD 7850M", "AMD Radeon HD 7850M"],
	  "vendor": "AMD",
	  "performance": 1373
	}, {
	  "names": ["Radeon HD 7870", "Radeon HD 7870 XT", "AMD Radeon HD 7870"],
	  "vendor": "AMD",
	  "performance": 4637
	}, {
	  "names": ["Radeon HD 7870M", "AMD Radeon HD 7870M"],
	  "vendor": "AMD",
	  "performance": 1507
	}, {
	  "names": ["Radeon HD 7950", "R9 280", "Radeon HD 7950"],
	  "vendor": "AMD",
	  "performance": 4765
	}, {
	  "names": ["Radeon HD 7970", "R9 280X", "Radeon HD 7970"],
	  "vendor": "AMD",
	  "performance": 5248
	}, {
	  "names": ["Radeon HD 7970M", "AMD Radeon HD 7970M"],
	  "vendor": "AMD",
	  "performance": 3619
	}, {
	  "names": ["Radeon HD 7990"],
	  "vendor": "AMD",
	  "performance": 5566
	}, {
	  "names": ["Radeon HD 8180", "Radeon HD 8180 IGP", "AMD Radeon HD 8180"],
	  "vendor": "AMD",
	  "performance": 152
	}, {
	  "names": ["Radeon HD 8210", "Radeon HD 8210 IGP", "AMD Radeon HD 8210"],
	  "vendor": "AMD",
	  "performance": 207
	}, {
	  "names": ["Radeon HD 8210E"],
	  "vendor": "AMD",
	  "performance": 194
	}, {
	  "names": ["Radeon HD 8240", "Radeon HD 8240 IGP", "AMD Radeon HD 8240"],
	  "vendor": "AMD",
	  "performance": 250
	}, {
	  "names": ["Radeon HD 8250", "Radeon HD 8250 IGP", "AMD Radeon HD 8250"],
	  "vendor": "AMD",
	  "performance": 203
	}, {
	  "names": ["Radeon HD 8280", "Radeon HD 8280 IGP", "AMD Radeon HD 8280"],
	  "vendor": "AMD",
	  "performance": 319
	}, {
	  "names": ["Radeon HD 8280E"],
	  "vendor": "AMD",
	  "performance": 283
	}, {
	  "names": ["Radeon HD 8310E"],
	  "vendor": "AMD",
	  "performance": 341
	}, {
	  "names": ["Radeon HD 8330", "Radeon HD 8330 IGP", "AMD Radeon HD 8330"],
	  "vendor": "AMD",
	  "performance": 251
	}, {
	  "names": ["Radeon HD 8330E"],
	  "vendor": "AMD",
	  "performance": 241
	}, {
	  "names": ["Radeon HD 8350", "Radeon HD 8350 OEM"],
	  "vendor": "AMD",
	  "performance": 189
	}, {
	  "names": ["Radeon HD 8350G", "Radeon HD 8350G IGP", "AMD Radeon HD 8350G"],
	  "vendor": "AMD",
	  "performance": 443
	}, {
	  "names": ["Radeon HD 8370D", "Radeon HD 8370D IGP"],
	  "vendor": "AMD",
	  "performance": 283
	}, {
	  "names": ["Radeon HD 8400", "Radeon HD 8400 IGP", "AMD Radeon HD 8400"],
	  "vendor": "AMD",
	  "performance": 256
	}, {
	  "names": ["Radeon HD 8400E"],
	  "vendor": "AMD",
	  "performance": 339
	}, {
	  "names": ["Radeon HD 8410G", "Radeon HD 8410G IGP", "AMD Radeon HD 8410G"],
	  "vendor": "AMD",
	  "performance": 435
	}, {
	  "names": ["Radeon HD 8450G", "Radeon HD 8450G IGP", "AMD Radeon HD 8450G + Radeon HD 8570M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 385
	}, {
	  "names": ["Radeon HD 8470", "Radeon HD 8470 OEM"],
	  "vendor": "AMD",
	  "performance": 341
	}, {
	  "names": ["Radeon HD 8470D", "Radeon HD 8470D IGP", "AMD Radeon HD 8470D"],
	  "vendor": "AMD",
	  "performance": 364
	}, {
	  "names": ["Radeon HD 8490", "Radeon HD 8490 OEM"],
	  "vendor": "AMD",
	  "performance": 271
	}, {
	  "names": ["Radeon HD 8510G", "Radeon HD 8510G IGP", "AMD Radeon HD 8510G"],
	  "vendor": "AMD",
	  "performance": 374
	}, {
	  "names": ["Radeon HD 8550D", "Radeon HD 8550D IGP"],
	  "vendor": "AMD",
	  "performance": 685
	}, {
	  "names": ["Radeon HD 8550G", "Radeon HD 8550G IGP", "AMD Radeon HD 8550G + HD 8750M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 457
	}, {
	  "names": ["Radeon HD 8550G + 7600M Dual", "AMD Radeon HD 8550G + HD 8670M Dual Graphics"],
	  "performance": 901
	}, {
	  "names": ["Radeon HD 8570", "Radeon HD 8570 OEM"],
	  "vendor": "AMD",
	  "performance": 977
	}, {
	  "names": ["Radeon HD 8570D", "Radeon HD 8570D IGP", "AMD Radeon HD 8570D"],
	  "vendor": "AMD",
	  "performance": 442
	}, {
	  "names": ["Radeon HD 8570M", "AMD Radeon HD 8650G + HD 8570M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 447
	}, {
	  "names": ["Radeon HD 8610G", "Radeon HD 8610G IGP", "AMD Radeon HD 8610G"],
	  "vendor": "AMD",
	  "performance": 420
	}, {
	  "names": ["Radeon HD 8650D", "Radeon HD 8650D IGP"],
	  "vendor": "AMD",
	  "performance": 526
	}, {
	  "names": ["Radeon HD 8650G", "Radeon HD 8650G IGP", "AMD Radeon HD 8650G + HD 8670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 519
	}, {
	  "names": ["Radeon HD 8670D", "Radeon HD 8670D IGP", "AMD Radeon HD 8670D"],
	  "vendor": "AMD",
	  "performance": 570
	}, {
	  "names": ["Radeon HD 8670M", "AMD Radeon HD 8670M"],
	  "vendor": "AMD",
	  "performance": 520
	}, {
	  "names": ["Radeon HD 8690M", "AMD Radeon HD 8690M"],
	  "vendor": "AMD",
	  "performance": 984
	}, {
	  "names": ["Radeon HD 8730M", "AMD Radeon HD 8730M"],
	  "vendor": "AMD",
	  "performance": 700
	}, {
	  "names": ["Radeon HD 8750M", "AMD Radeon HD 8750M"],
	  "vendor": "AMD",
	  "performance": 881
	}, {
	  "names": ["Radeon HD 8790M", "AMD Radeon HD 8790M"],
	  "vendor": "AMD",
	  "performance": 1306
	}, {
	  "names": ["Radeon HD 8850M", "AMD Radeon HD 8850M"],
	  "vendor": "AMD",
	  "performance": 973
	}, {
	  "names": ["Radeon HD 8870M", "AMD Radeon HD 8870M"],
	  "vendor": "AMD",
	  "performance": 1638
	}, {
	  "names": ["Radeon HD 8950", "Radeon HD 8950 OEM"],
	  "vendor": "AMD",
	  "performance": 2220
	}, {
	  "names": ["Radeon HD 8970M", "AMD Radeon HD 8970M"],
	  "vendor": "AMD",
	  "performance": 3876
	}, {
	  "names": ["Radeon HD 8990", "Radeon HD 8990 OEM"],
	  "vendor": "AMD",
	  "performance": 5214
	}, {
	  "names": ["Radeon Instinct MI25 MxGPU", "Radeon Instinct MI25"],
	  "vendor": "AMD",
	  "performance": 10466
	}, {
	  "names": ["Radeon M535DX", "Radeon R8 M535DX"],
	  "vendor": "AMD",
	  "performance": 750
	}, {
	  "names": ["Radeon Pro 450", "AMD Radeon Pro 450"],
	  "vendor": "AMD",
	  "performance": 2723
	}, {
	  "names": ["Radeon Pro 455", "AMD Radeon Pro 455"],
	  "vendor": "AMD",
	  "performance": 3113
	}, {
	  "names": ["Radeon Pro 460", "AMD Radeon Pro 460"],
	  "vendor": "AMD",
	  "performance": 3453
	}, {
	  "names": ["Radeon Pro 5300M", "AMD Radeon Pro 5300M"],
	  "performance": 5519
	}, {
	  "names": ["Radeon Pro 5500M", "AMD Radeon Pro 5500M"],
	  "performance": 6699
	}, {
	  "names": ["Radeon Pro 555", "AMD Radeon Pro 555"],
	  "vendor": "AMD",
	  "performance": 3141
	}, {
	  "names": ["Radeon Pro 560", "AMD Radeon Pro 560"],
	  "vendor": "AMD",
	  "performance": 3475
	}, {
	  "names": ["Radeon Pro 5600M", "AMD Radeon Pro 5600M"],
	  "performance": 9640
	}, {
	  "names": ["Radeon Pro 560X", "AMD Radeon Pro 560X"],
	  "vendor": "AMD",
	  "performance": 3678
	}, {
	  "names": ["Radeon Pro 570"],
	  "vendor": "AMD",
	  "performance": 6337
	}, {
	  "names": ["Radeon Pro 580"],
	  "vendor": "AMD",
	  "performance": 7753
	}, {
	  "names": ["Radeon Pro Duo"],
	  "vendor": "AMD",
	  "performance": 9672
	}, {
	  "names": ["Radeon Pro SSG"],
	  "vendor": "AMD",
	  "performance": 10498
	}, {
	  "names": ["Radeon Pro V340 MxGPU"],
	  "vendor": "AMD",
	  "performance": 2853
	}, {
	  "names": ["Radeon Pro Vega 16", "AMD Radeon Pro Vega 16"],
	  "vendor": "AMD",
	  "performance": 4683
	}, {
	  "names": ["Radeon Pro Vega 20", "AMD Radeon Pro Vega 20"],
	  "vendor": "AMD",
	  "performance": 5752
	}, {
	  "names": ["Radeon Pro Vega 56", "AMD Radeon Pro Vega 56"],
	  "vendor": "AMD",
	  "performance": 12209
	}, {
	  "names": ["Radeon Pro Vega 64"],
	  "vendor": "AMD",
	  "performance": 11456
	}, {
	  "names": ["Radeon Pro VII", "Radeon VII"],
	  "vendor": "AMD",
	  "performance": 17228
	}, {
	  "names": ["Radeon Pro WX 2100"],
	  "vendor": "AMD",
	  "performance": 1644
	}, {
	  "names": ["Radeon Pro WX 3100", "AMD Radeon Pro WX 3100"],
	  "vendor": "AMD",
	  "performance": 2710
	}, {
	  "names": ["Radeon Pro WX 3200", "AMD Radeon Pro WX 3200"],
	  "performance": 2560
	}, {
	  "names": ["Radeon Pro WX 4100"],
	  "vendor": "AMD",
	  "performance": 3710
	}, {
	  "names": ["Radeon Pro WX 4130", "Radeon Pro WX 4130 Mobile", "AMD Radeon Pro WX 4130"],
	  "vendor": "AMD",
	  "performance": 2304
	}, {
	  "names": ["Radeon Pro WX 4150", "Radeon Pro WX 4150 Mobile", "AMD Radeon Pro WX 4150"],
	  "vendor": "AMD",
	  "performance": 1849
	}, {
	  "names": ["Radeon Pro WX 4170", "Radeon Pro WX 4170 Mobile"],
	  "vendor": "AMD",
	  "performance": 1409
	}, {
	  "names": ["Radeon Pro WX 5100"],
	  "vendor": "AMD",
	  "performance": 5344
	}, {
	  "names": ["Radeon Pro WX 7100", "AMD Radeon Pro WX 7100"],
	  "vendor": "AMD",
	  "performance": 7439
	}, {
	  "names": ["Radeon Pro WX 8200"],
	  "vendor": "AMD",
	  "performance": 14190
	}, {
	  "names": ["Radeon Pro WX 9100"],
	  "vendor": "AMD",
	  "performance": 13809
	}, {
	  "names": ["Radeon Pro WX Vega M GL", "AMD Radeon Pro WX Vega M GL"],
	  "vendor": "AMD",
	  "performance": 6049
	}, {
	  "names": ["Radeon R2", "Radeon R2 Graphics", "AMD Radeon R2 (Stoney Ridge)"],
	  "vendor": "AMD",
	  "performance": 241
	}, {
	  "names": ["Radeon R3", "Radeon R3 Graphics", "AMD Radeon R3 (Mullins", "Beema)"],
	  "vendor": "AMD",
	  "performance": 306
	}, {
	  "names": ["Radeon R4", "Radeon R4 Graphics", "AMD Radeon R4 (Beema)"],
	  "vendor": "AMD",
	  "performance": 340
	}, {
	  "names": ["Radeon R5 220", "Radeon R5 220 OEM"],
	  "vendor": "AMD",
	  "performance": 136
	}, {
	  "names": ["Radeon R5 230"],
	  "vendor": "AMD",
	  "performance": 242
	}, {
	  "names": ["Radeon R5 235", "Radeon R5 235 OEM"],
	  "vendor": "AMD",
	  "performance": 318
	}, {
	  "names": ["Radeon R5 235X", "Radeon R5 235X OEM"],
	  "vendor": "AMD",
	  "performance": 316
	}, {
	  "names": ["Radeon R5 240", "Radeon R5 240 OEM"],
	  "vendor": "AMD",
	  "performance": 518
	}, {
	  "names": ["Radeon R5 310", "Radeon R5 310 OEM"],
	  "vendor": "AMD",
	  "performance": 332
	}, {
	  "names": ["Radeon R5 330", "Radeon R5 330 OEM"],
	  "vendor": "AMD",
	  "performance": 617
	}, {
	  "names": ["Radeon R5 340", "Radeon R5 340 OEM"],
	  "vendor": "AMD",
	  "performance": 1055
	}, {
	  "names": ["Radeon R5 430", "Radeon R5 430 OEM"],
	  "vendor": "AMD",
	  "performance": 915
	}, {
	  "names": ["Radeon R5 435", "Radeon R5 435 OEM"],
	  "vendor": "AMD",
	  "performance": 841
	}, {
	  "names": ["Radeon R5 A240"],
	  "vendor": "AMD",
	  "performance": 576
	}, {
	  "names": ["Radeon R5 M230", "AMD Radeon R5 M230"],
	  "vendor": "AMD",
	  "performance": 386
	}, {
	  "names": ["Radeon R5 M240", "AMD Radeon R5 M240"],
	  "vendor": "AMD",
	  "performance": 432
	}, {
	  "names": ["Radeon R5 M255", "AMD Radeon R5 M255"],
	  "vendor": "AMD",
	  "performance": 552
	}, {
	  "names": ["Radeon R5 M315", "AMD Radeon R5 M315"],
	  "vendor": "AMD",
	  "performance": 462
	}, {
	  "names": ["Radeon R5 M320", "AMD Radeon R5 M320"],
	  "vendor": "AMD",
	  "performance": 430
	}, {
	  "names": ["Radeon R5 M330", "AMD Radeon R5 M330"],
	  "vendor": "AMD",
	  "performance": 596
	}, {
	  "names": ["Radeon R5 M335", "AMD Radeon R5 M335"],
	  "vendor": "AMD",
	  "performance": 549
	}, {
	  "names": ["Radeon R5 M420", "AMD Radeon R5 M420"],
	  "vendor": "AMD",
	  "performance": 459
	}, {
	  "names": ["Radeon R5 M430", "AMD Radeon R5 M430"],
	  "vendor": "AMD",
	  "performance": 649
	}, {
	  "names": ["Radeon R5 M435"],
	  "vendor": "AMD",
	  "performance": 874
	}, {
	  "names": ["Radeon R6", "Radeon R6 Graphics", "AMD Radeon R6 (Carrizo)"],
	  "vendor": "AMD",
	  "performance": 600
	}, {
	  "names": ["Radeon R6 + R7 M265DX Dual", "Radeon R7 M265DX"],
	  "vendor": "AMD",
	  "performance": 571
	}, {
	  "names": ["Radeon R6 M255DX", "AMD Radeon R6 M255DX"],
	  "vendor": "AMD",
	  "performance": 570
	}, {
	  "names": ["Radeon R7 + R7 240 Dual", "Radeon R7 240"],
	  "vendor": "AMD",
	  "performance": 1045
	}, {
	  "names": ["Radeon R7 + R7 250 Dual", "Radeon R7 250"],
	  "vendor": "AMD",
	  "performance": 1232
	}, {
	  "names": ["Radeon R7 + R7 350 Dual", "Radeon R7 350"],
	  "vendor": "AMD",
	  "performance": 1982
	}, {
	  "names": ["Radeon R7 240", "Radeon R7 240 OEM"],
	  "vendor": "AMD",
	  "performance": 835
	}, {
	  "names": ["Radeon R7 250", "Radeon R7 250 OEM", "AMD Radeon R7 250"],
	  "vendor": "AMD",
	  "performance": 1178
	}, {
	  "names": ["Radeon R7 250X"],
	  "vendor": "AMD",
	  "performance": 2269
	}, {
	  "names": ["Radeon R7 260"],
	  "vendor": "AMD",
	  "performance": 2892
	}, {
	  "names": ["Radeon R7 260X"],
	  "vendor": "AMD",
	  "performance": 3087
	}, {
	  "names": ["Radeon R7 340", "Radeon R7 340 OEM"],
	  "vendor": "AMD",
	  "performance": 931
	}, {
	  "names": ["Radeon R7 360"],
	  "vendor": "AMD",
	  "performance": 3089
	}, {
	  "names": ["Radeon R7 370", "AMD Radeon R7 370"],
	  "vendor": "AMD",
	  "performance": 4437
	}, {
	  "names": ["Radeon R7 430", "Radeon R7 430 OEM"],
	  "vendor": "AMD",
	  "performance": 1159
	}, {
	  "names": ["Radeon R7 450", "Radeon R7 450 OEM"],
	  "vendor": "AMD",
	  "performance": 1967
	}, {
	  "names": ["Radeon R7 A265"],
	  "vendor": "AMD",
	  "performance": 955
	}, {
	  "names": ["Radeon R7 A360"],
	  "vendor": "AMD",
	  "performance": 720
	}, {
	  "names": ["Radeon R7 M260", "AMD Radeon R7 M260"],
	  "vendor": "AMD",
	  "performance": 447
	}, {
	  "names": ["Radeon R7 M260DX"],
	  "vendor": "AMD",
	  "performance": 811
	}, {
	  "names": ["Radeon R7 M260X", "AMD Radeon R7 M260X"],
	  "vendor": "AMD",
	  "performance": 948
	}, {
	  "names": ["Radeon R7 M265", "AMD Radeon R7 M265"],
	  "vendor": "AMD",
	  "performance": 631
	}, {
	  "names": ["Radeon R7 M270", "AMD Radeon R7 M270"],
	  "vendor": "AMD",
	  "performance": 755
	}, {
	  "names": ["Radeon R7 M270DX"],
	  "vendor": "AMD",
	  "performance": 962
	}, {
	  "names": ["Radeon R7 M340", "AMD Radeon R7 M340"],
	  "vendor": "AMD",
	  "performance": 644
	}, {
	  "names": ["Radeon R7 M350"],
	  "vendor": "AMD",
	  "performance": 1065
	}, {
	  "names": ["Radeon R7 M360", "AMD Radeon R7 M360"],
	  "vendor": "AMD",
	  "performance": 546
	}, {
	  "names": ["Radeon R7 M365X"],
	  "vendor": "AMD",
	  "performance": 902
	}, {
	  "names": ["Radeon R7 M370", "AMD Radeon R7 M370"],
	  "vendor": "AMD",
	  "performance": 1418
	}, {
	  "names": ["Radeon R7 M380", "AMD Radeon R7 M380"],
	  "vendor": "AMD",
	  "performance": 1447
	}, {
	  "names": ["Radeon R7 M440", "AMD Radeon R7 M440"],
	  "vendor": "AMD",
	  "performance": 885
	}, {
	  "names": ["Radeon R7 M445", "AMD Radeon R7 M445"],
	  "vendor": "AMD",
	  "performance": 919
	}, {
	  "names": ["Radeon R7 M460", "AMD Radeon R7 M460"],
	  "vendor": "AMD",
	  "performance": 1005
	}, {
	  "names": ["Radeon R7 M465", "AMD Radeon R7 M465"],
	  "vendor": "AMD",
	  "performance": 1306
	}, {
	  "names": ["Radeon R7 M465X"],
	  "vendor": "AMD",
	  "performance": 1691
	}, {
	  "names": ["Radeon R8 M365DX", "AMD Radeon R8 M365DX"],
	  "vendor": "AMD",
	  "performance": 741
	}, {
	  "names": ["Radeon R8 M445DX", "AMD Radeon R8 M445DX"],
	  "vendor": "AMD",
	  "performance": 794
	}, {
	  "names": ["Radeon R9 255", "Radeon R9 255 OEM"],
	  "vendor": "AMD",
	  "performance": 1251
	}, {
	  "names": ["Radeon R9 260", "Radeon R9 260 OEM"],
	  "vendor": "AMD",
	  "performance": 3018
	}, {
	  "names": ["Radeon R9 270"],
	  "vendor": "AMD",
	  "performance": 4213
	}, {
	  "names": ["Radeon R9 270X", "AMD Radeon R9 270X"],
	  "vendor": "AMD",
	  "performance": 4862
	}, {
	  "names": ["Radeon R9 280"],
	  "vendor": "AMD",
	  "performance": 5563
	}, {
	  "names": ["Radeon R9 280X", "AMD Radeon R9 280X"],
	  "vendor": "AMD",
	  "performance": 6230
	}, {
	  "names": ["Radeon R9 285", "380", "Radeon R9 285"],
	  "vendor": "AMD",
	  "performance": 5550
	}, {
	  "names": ["Radeon R9 290"],
	  "vendor": "AMD",
	  "performance": 8369
	}, {
	  "names": ["Radeon R9 290X", "AMD Radeon R9 290X"],
	  "vendor": "AMD",
	  "performance": 8607
	}, {
	  "names": ["Radeon R9 295X2"],
	  "vendor": "AMD",
	  "performance": 8533
	}, {
	  "names": ["Radeon R9 360", "Radeon R9 360 OEM"],
	  "vendor": "AMD",
	  "performance": 3032
	}, {
	  "names": ["Radeon R9 370"],
	  "vendor": "AMD",
	  "performance": 4722
	}, {
	  "names": ["Radeon R9 380", "AMD Radeon R9 380"],
	  "vendor": "AMD",
	  "performance": 6190
	}, {
	  "names": ["Radeon R9 380X"],
	  "vendor": "AMD",
	  "performance": 6183
	}, {
	  "names": ["Radeon R9 390"],
	  "vendor": "AMD",
	  "performance": 8863
	}, {
	  "names": ["Radeon R9 390X", "AMD Radeon R9 390X"],
	  "vendor": "AMD",
	  "performance": 9492
	}, {
	  "names": ["Radeon R9 A375"],
	  "vendor": "AMD",
	  "performance": 1024
	}, {
	  "names": ["Radeon R9 Fury", "Radeon R9 FURY", "AMD Radeon R9 Fury"],
	  "vendor": "AMD",
	  "performance": 9792
	}, {
	  "names": ["Radeon R9 Fury + Fury X", "Radeon R9 FURY X"],
	  "vendor": "AMD",
	  "performance": 9741
	}, {
	  "names": ["Radeon R9 M265X", "AMD Radeon R9 M265X"],
	  "vendor": "AMD",
	  "performance": 901
	}, {
	  "names": ["Radeon R9 M270X"],
	  "vendor": "AMD",
	  "performance": 1445
	}, {
	  "names": ["Radeon R9 M275", "AMD Radeon R9 M275"],
	  "vendor": "AMD",
	  "performance": 1115
	}, {
	  "names": ["Radeon R9 M275X", "M375", "Radeon R9 M275X"],
	  "vendor": "AMD",
	  "performance": 1575
	}, {
	  "names": ["Radeon R9 M280X", "AMD Radeon R9 M280X"],
	  "vendor": "AMD",
	  "performance": 1148
	}, {
	  "names": ["Radeon R9 M290X", "AMD Radeon R9 M290X"],
	  "vendor": "AMD",
	  "performance": 3207
	}, {
	  "names": ["Radeon R9 M295X", "AMD Radeon R9 M295X"],
	  "vendor": "AMD",
	  "performance": 5150
	}, {
	  "names": ["Radeon R9 M360"],
	  "vendor": "AMD",
	  "performance": 1682
	}, {
	  "names": ["Radeon R9 M365X", "AMD Radeon R9 M365X"],
	  "vendor": "AMD",
	  "performance": 1482
	}, {
	  "names": ["Radeon R9 M370X", "Radeon R9 M370X Mac Edition", "AMD Radeon R9 M370X"],
	  "vendor": "AMD",
	  "performance": 1353
	}, {
	  "names": ["Radeon R9 M375", "AMD Radeon R9 M375"],
	  "vendor": "AMD",
	  "performance": 928
	}, {
	  "names": ["Radeon R9 M375X"],
	  "vendor": "AMD",
	  "performance": 1850
	}, {
	  "names": ["Radeon R9 M380", "AMD Radeon R9 M380"],
	  "vendor": "AMD",
	  "performance": 3189
	}, {
	  "names": ["Radeon R9 M385", "AMD Radeon R9 M385"],
	  "vendor": "AMD",
	  "performance": 2180
	}, {
	  "names": ["Radeon R9 M385X", "AMD Radeon R9 M385X"],
	  "vendor": "AMD",
	  "performance": 1760
	}, {
	  "names": ["Radeon R9 M390X", "AMD Radeon R9 M390X"],
	  "vendor": "AMD",
	  "performance": 4357
	}, {
	  "names": ["Radeon R9 M395", "Radeon R9 M395 Mac Edition", "AMD Radeon R9 M395"],
	  "vendor": "AMD",
	  "performance": 4967
	}, {
	  "names": ["Radeon R9 M395X", "AMD Radeon R9 M395X"],
	  "vendor": "AMD",
	  "performance": 4775
	}, {
	  "names": ["Radeon R9 M470", "AMD Radeon R9 M470"],
	  "vendor": "AMD",
	  "performance": 2435
	}, {
	  "names": ["Radeon R9 M470X", "AMD Radeon R9 M470X"],
	  "vendor": "AMD",
	  "performance": 3400
	}, {
	  "names": ["Radeon R9 M485X", "AMD Radeon R9 M485X"],
	  "vendor": "AMD",
	  "performance": 4842
	}, {
	  "names": ["Radeon RX 460", "AMD Radeon RX 460 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 4079
	}, {
	  "names": ["Radeon RX 470", "AMD Radeon RX 470 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 7938
	}, {
	  "names": ["Radeon RX 480", "AMD Radeon RX 480 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8533
	}, {
	  "names": ["Radeon RX 550", "AMD Radeon RX 550 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 2812
	}, {
	  "names": ["Radeon RX 5500M", "AMD Radeon RX 5500M"],
	  "performance": 3923
	}, {
	  "names": ["Radeon RX 550X"],
	  "vendor": "AMD",
	  "performance": 2041
	}, {
	  "names": ["Radeon RX 560", "AMD Radeon RX 560 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 3663
	}, {
	  "names": ["Radeon RX 5600", "AMD Radeon RX 5600 XT (Desktop)"],
	  "performance": 10918
	}, {
	  "names": ["Radeon RX 5600M", "AMD Radeon RX 5600M"],
	  "performance": 6906
	}, {
	  "names": ["Radeon RX 560X", "AMD Radeon RX 560X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 3520
	}, {
	  "names": ["Radeon RX 570", "AMD Radeon RX 570 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 6967
	}, {
	  "names": ["Radeon RX 5700", "AMD Radeon RX 5700 (Desktop)"],
	  "performance": 14513
	}, {
	  "names": ["Radeon RX 5700 XT", "AMD Radeon RX 5700 XT (Desktop)"],
	  "performance": 16732
	}, {
	  "names": ["Radeon RX 570X", "AMD Radeon RX 570X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 1923
	}, {
	  "names": ["Radeon RX 580", "AMD Radeon RX 580 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8762
	}, {
	  "names": ["Radeon RX 580 2048SP"],
	  "vendor": "AMD",
	  "performance": 7788
	}, {
	  "names": ["Radeon RX 580X", "AMD Radeon RX 580X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 7798
	}, {
	  "names": ["Radeon RX 590", "AMD Radeon RX 590 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 9509
	}, {
	  "names": ["Radeon RX 640", "AMD Radeon RX 640"],
	  "performance": 1368
	}, {
	  "names": ["Radeon RX 6800", "AMD Radeon RX 6800 (Desktop)"],
	  "performance": 22436
	}, {
	  "names": ["Radeon RX 6800 XT", "AMD Radeon RX 6800 XT (Desktop)"],
	  "performance": 24556
	}, {
	  "names": ["Radeon RX Vega 10", "Radeon RX Vega 10 Mobile", "AMD Radeon RX Vega 10"],
	  "vendor": "AMD",
	  "performance": 1527
	}, {
	  "names": ["Radeon RX Vega 11", "AMD Radeon RX Vega 11"],
	  "vendor": "AMD",
	  "performance": 2124
	}, {
	  "names": ["Radeon RX Vega 11 PRD", "Radeon RX Vega 11 Efficient"],
	  "vendor": "AMD",
	  "performance": 2402
	}, {
	  "names": ["Radeon RX Vega 56", "AMD Radeon RX Vega 56"],
	  "vendor": "AMD",
	  "performance": 13421
	}, {
	  "names": ["Radeon RX Vega 64", "AMD Radeon RX Vega 64"],
	  "vendor": "AMD",
	  "performance": 14528
	}, {
	  "names": ["Radeon RX Vega 8", "Radeon Vega 8"],
	  "vendor": "AMD",
	  "performance": 1586
	}, {
	  "names": ["Radeon RX Vega M GH", "AMD Radeon RX Vega M GH"],
	  "vendor": "AMD",
	  "performance": 6784
	}, {
	  "names": ["Radeon RX Vega M GL"],
	  "vendor": "AMD",
	  "performance": 3379
	}, {
	  "names": ["Radeon Sky 500"],
	  "vendor": "AMD",
	  "performance": 4889
	}, {
	  "names": ["Radeon Vega 11", "Radeon Vega 11 Embedded"],
	  "vendor": "AMD",
	  "performance": 1858
	}, {
	  "names": ["Radeon Vega 2", "AMD Radeon RX Vega 2"],
	  "performance": 516
	}, {
	  "names": ["Radeon Vega 3", "Radeon Vega 3 Embedded", "AMD Radeon RX Vega 3"],
	  "vendor": "AMD",
	  "performance": 921
	}, {
	  "names": ["Radeon Vega 3 Mobile"],
	  "vendor": "AMD",
	  "performance": 1114
	}, {
	  "names": ["Radeon Vega 6", "Radeon Vega 6 Mobile"],
	  "vendor": "AMD",
	  "performance": 1205
	}, {
	  "names": ["Radeon Vega 8", "Radeon Vega 8 Embedded"],
	  "vendor": "AMD",
	  "performance": 1577
	}, {
	  "names": ["Radeon Vega 9", "AMD Radeon RX Vega 9"],
	  "performance": 1661
	}, {
	  "names": ["Radeon Vega Frontier Edition"],
	  "vendor": "AMD",
	  "performance": 13824
	}, {
	  "names": ["Tesla C2050"],
	  "vendor": "NVIDIA",
	  "performance": 3515
	}, {
	  "names": ["Tesla C2070"],
	  "vendor": "NVIDIA",
	  "performance": 3275
	}, {
	  "names": ["Tesla C2075"],
	  "vendor": "NVIDIA",
	  "performance": 3364
	}, {
	  "names": ["Tesla M10"],
	  "vendor": "NVIDIA",
	  "performance": 3490
	}, {
	  "names": ["Tesla M2070-Q"],
	  "vendor": "NVIDIA",
	  "performance": 1306
	}, {
	  "names": ["Tesla M6"],
	  "vendor": "NVIDIA",
	  "performance": 7621
	}, {
	  "names": ["Tesla M60"],
	  "vendor": "NVIDIA",
	  "performance": 7329
	}, {
	  "names": ["Tesla T4"],
	  "vendor": "NVIDIA",
	  "performance": 10598
	}, {
	  "names": ["TITAN RTX", "NVIDIA Titan RTX"],
	  "vendor": "NVIDIA",
	  "performance": 19843
	}, {
	  "names": ["TITAN V"],
	  "vendor": "NVIDIA",
	  "performance": 19378
	}, {
	  "names": ["TITAN V CEO Edition"],
	  "vendor": "NVIDIA",
	  "performance": 16988
	}, {
	  "names": ["Radeon R9 Nano", "AMD Radeon R9 Nano"],
	  "vendor": "AMD",
	  "performance": 8221
	}, {
	  "names": ["Radeon HD 6450M", "AMD Radeon HD 6450M"],
	  "vendor": "AMD",
	  "performance": 595
	}, {
	  "names": ["Radeon HD 6730M", "AMD Radeon HD 6730M"],
	  "vendor": "AMD",
	  "performance": 1034
	}, {
	  "names": ["Radeon HD 6850M", "AMD Radeon HD 6850M"],
	  "vendor": "AMD",
	  "performance": 1099
	}, {
	  "names": ["Radeon HD 6870M", "AMD Radeon HD 6870M"],
	  "vendor": "AMD",
	  "performance": 1669
	}, {
	  "names": ["Radeon HD 6950M", "AMD Radeon HD 6950M"],
	  "vendor": "AMD",
	  "performance": 1481
	}, {
	  "names": ["Radeon HD 6990M", "AMD Radeon HD 6990M"],
	  "vendor": "AMD",
	  "performance": 1997
	}, {
	  "names": ["Radeon HD 7770M", "AMD Radeon HD 7770M"],
	  "vendor": "AMD",
	  "performance": 1362
	}, {
	  "names": ["Radeon HD 8550M", "AMD Radeon HD 8550M"],
	  "vendor": "AMD",
	  "performance": 628
	}, {
	  "names": ["Radeon HD 8770M", "AMD Radeon HD 8770M"],
	  "vendor": "AMD",
	  "performance": 1445
	}, {
	  "names": ["FirePro M8900", "AMD FirePro M8900"],
	  "vendor": "AMD",
	  "performance": 1937
	}, {
	  "names": ["Radeon R6 M340DX", "AMD Radeon R6 M340DX"],
	  "vendor": "AMD",
	  "performance": 1059
	}, {
	  "names": ["HD Graphics 2500", "Intel HD Graphics 2500"],
	  "vendor": "Intel",
	  "performance": 424
	}, {
	  "names": ["HD Graphics 400", "Intel HD Graphics 400 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 309
	}, {
	  "names": ["HD Graphics 405", "Intel HD Graphics 405 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 394
	}, {
	  "names": ["HD Graphics 4200", "Intel HD Graphics 4200"],
	  "vendor": "Intel",
	  "performance": 543
	}, {
	  "names": ["Tegra 3", "NVIDIA GeForce ULP (Tegra 3)"],
	  "vendor": "NVIDIA",
	  "performance": 62
	}, {
	  "names": ["Tegra 4", "NVIDIA GeForce Tegra 4"],
	  "vendor": "NVIDIA",
	  "performance": 274
	}, {
	  "names": ["Tegra K1", "NVIDIA Tegra K1 Kepler GPU"],
	  "vendor": "NVIDIA",
	  "performance": 697
	}, {
	  "names": ["Tegra X1", "NVIDIA Tegra X1 Maxwell GPU"],
	  "vendor": "NVIDIA",
	  "performance": 1109
	}, {
	  "names": ["NVIDIA GeForce RTX 2080 Super (Desktop)"],
	  "performance": 17212
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 SLI (Laptop)"],
	  "performance": 16491
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Desktop)"],
	  "performance": 16755
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Laptop)"],
	  "performance": 16240
	}, {
	  "names": ["NVIDIA GeForce RTX 2070 Super (Desktop)"],
	  "performance": 14063
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 (Desktop)"],
	  "performance": 11090
	}, {
	  "names": ["NVIDIA GeForce GTX 980 SLI (Laptop)"],
	  "performance": 11376
	}, {
	  "names": ["NVIDIA GeForce GTX 1660 (Desktop)"],
	  "performance": 10176
	}, {
	  "names": ["NVIDIA GeForce GTX 980M SLI"],
	  "performance": 8754
	}, {
	  "names": ["NVIDIA GeForce GTX 980 (Laptop)"],
	  "performance": 7331
	}, {
	  "names": ["NVIDIA GeForce GTX 970M SLI"],
	  "performance": 7142
	}, {
	  "names": ["AMD Radeon RX 580 (Laptop)"],
	  "performance": 6175
	}, {
	  "names": ["AMD Radeon RX 5300M"],
	  "performance": 6918
	}, {
	  "names": ["NVIDIA GeForce GTX 1650 (Desktop)"],
	  "performance": 7336
	}, {
	  "names": ["AMD Radeon RX 480 (Laptop)"],
	  "performance": 3522
	}, {
	  "names": ["AMD Radeon RX 470 (Laptop)"],
	  "performance": 7463
	}, {
	  "names": ["NVIDIA GeForce GTX 880M SLI"],
	  "performance": 6992
	}, {
	  "names": ["NVIDIA GeForce GTX 780M SLI"],
	  "performance": 6245
	}, {
	  "names": ["NVIDIA GeForce GTX 965M SLI"],
	  "performance": 5612
	}, {
	  "names": ["AMD Radeon R9 M290X Crossfire"],
	  "performance": 6263
	}, {
	  "names": ["AMD Radeon HD 8970M Crossfire"],
	  "performance": 5944
	}, {
	  "names": ["NVIDIA GeForce GTX 680M SLI"],
	  "performance": 5134
	}, {
	  "names": ["AMD Radeon HD 7970M Crossfire"],
	  "performance": 4378
	}, {
	  "names": ["NVIDIA GeForce GTX 860M SLI"],
	  "performance": 4402
	}, {
	  "names": ["AMD Radeon HD 7970"],
	  "performance": 4064
	}, {
	  "names": ["AMD Radeon RX Vega M GL", "870"],
	  "performance": 4421
	}, {
	  "names": ["NVIDIA GeForce GTX 1050 (Desktop)"],
	  "performance": 4907
	}, {
	  "names": ["Intel Iris Xe Graphics G7 96EUs"],
	  "performance": 3665
	}, {
	  "names": ["NVIDIA GeForce GTX 675M SLI"],
	  "performance": 3249
	}, {
	  "names": ["NVIDIA GeForce GTX 765M SLI"],
	  "performance": 3714
	}, {
	  "names": ["AMD Radeon RX 460 (Laptop)"],
	  "performance": 3035
	}, {
	  "names": ["AMD Radeon R9 M390"],
	  "performance": 3687
	}, {
	  "names": ["NVIDIA GeForce GTX 670MX SLI"],
	  "performance": 3500
	}, {
	  "names": ["Intel Iris Xe Graphics G7 80EUs"],
	  "performance": 2242
	}, {
	  "names": ["NVIDIA GeForce GTX 580M SLI"],
	  "performance": 2641
	}, {
	  "names": ["AMD Radeon HD 6990M Crossfire"],
	  "performance": 3209
	}, {
	  "names": ["NVIDIA GeForce GT 755M SLI"],
	  "performance": 2907
	}, {
	  "names": ["NVIDIA GeForce GTX 485M SLI"],
	  "performance": 2841
	}, {
	  "names": ["AMD Radeon HD 6970M Crossfire"],
	  "performance": 3051
	}, {
	  "names": ["NVIDIA GeForce GT 750M SLI"],
	  "performance": 2490
	}, {
	  "names": ["NVIDIA GeForce GTX 560M SLI"],
	  "performance": 2346
	}, {
	  "names": ["NVIDIA GeForce GT 650M SLI"],
	  "performance": 1944
	}, {
	  "names": ["NVIDIA Maxwell GPU Surface Book"],
	  "performance": 1768
	}, {
	  "names": ["AMD Radeon RX Vega 8 (Ryzen 4000)"],
	  "performance": 3235
	}, {
	  "names": ["AMD Radeon RX Vega 7"],
	  "performance": 2571
	}, {
	  "names": ["Intel Iris Plus Graphics G4 (Ice Lake 48 EU)"],
	  "performance": 1937
	}, {
	  "names": ["Apple A12Z Bionic GPU"],
	  "performance": 5651
	}, {
	  "names": ["Apple A12X Bionic GPU"],
	  "performance": 4697
	}, {
	  "names": ["Apple M1 8-Core GPU"],
	  "performance": 7627
	}, {
	  "names": ["Apple M1 7-Core GPU"],
	  "performance": 6195
	}, {
	  "names": ["AMD Radeon R7 M275DX"],
	  "performance": 1454
	}, {
	  "names": ["AMD Radeon R7 512 Cores (Kaveri Desktop)"],
	  "performance": 1342
	}, {
	  "names": ["AMD Radeon R7 384 Cores (Kaveri Desktop)"],
	  "performance": 1303
	}, {
	  "names": ["Apple A14 Bionic GPU"],
	  "performance": 3970
	}, {
	  "names": ["ARM Mali-G78 MP24"],
	  "performance": 3151
	}, {
	  "names": ["AMD Radeon RX Vega 6 (Ryzen 4000)"],
	  "performance": 2209
	}, {
	  "names": ["Apple A13 Bionic GPU"],
	  "performance": 3716
	}, {
	  "names": ["Apple A12 Bionic GPU"],
	  "performance": 2937
	}, {
	  "names": ["Apple A11 Bionic GPU"],
	  "performance": 1863
	}, {
	  "names": ["Apple A10X Fusion GPU", "PowerVR"],
	  "performance": 2354
	}, {
	  "names": ["Qualcomm Adreno 650"],
	  "performance": 2734
	}, {
	  "names": ["AMD Radeon R7 (Bristol Ridge)"],
	  "performance": 878
	}, {
	  "names": ["AMD Radeon R7 (Carrizo)"],
	  "performance": 1003
	}, {
	  "names": ["AMD Radeon R7 (Kaveri)"],
	  "performance": 969
	}, {
	  "names": ["Apple A9X", "PowerVR Series 7XT"],
	  "performance": 1455
	}, {
	  "names": ["AMD Radeon RX Vega 6 (Ryzen 2000", "3000)"],
	  "performance": 1681
	}, {
	  "names": ["AMD Radeon RX Vega 5"],
	  "performance": 1880
	}, {
	  "names": ["Intel UHD Graphics G1 (Ice Lake 32 EU)"],
	  "performance": 1563
	}, {
	  "names": ["Intel UHD Graphics G7 (Lakefield GT2 64 EU)"],
	  "performance": 1081
	}, {
	  "names": ["AMD Radeon R5 (Bristol Ridge)"],
	  "performance": 1028
	}, {
	  "names": ["Qualcomm Adreno 680"],
	  "performance": 996
	}, {
	  "names": ["AMD Radeon R6 (Kaveri)"],
	  "performance": 713
	}, {
	  "names": ["AMD Radeon HD 8650M"],
	  "performance": 795
	}, {
	  "names": ["AMD Radeon HD 6755G2"],
	  "performance": 813
	}, {
	  "names": ["AMD Radeon HD 6740G2"],
	  "performance": 897
	}, {
	  "names": ["AMD Radeon HD 8650G"],
	  "performance": 900
	}, {
	  "names": ["AMD Radeon R5 (Stoney Ridge)"],
	  "performance": 669
	}, {
	  "names": ["Apple A10 Fusion GPU", "PowerVR"],
	  "performance": 1310
	}, {
	  "names": ["AMD Radeon HD 6720G2"],
	  "performance": 768
	}, {
	  "names": ["AMD Radeon HD 8570M"],
	  "performance": 765
	}, {
	  "names": ["ARM Mali-G77 MP11"],
	  "performance": 2174
	}, {
	  "names": ["ARM Mali-G77 MP9"],
	  "performance": 1992
	}, {
	  "names": ["ARM Mali-G76 MP16"],
	  "performance": 1782
	}, {
	  "names": ["Qualcomm Adreno 640"],
	  "performance": 2108
	}, {
	  "names": ["ARM Mali-G76 MP12"],
	  "performance": 1570
	}, {
	  "names": ["ARM Mali-G76 MP10"],
	  "performance": 1383
	}, {
	  "names": ["ARM Mali-G57 MP6"],
	  "performance": 1356
	}, {
	  "names": ["ARM Mali-G57 MP5"],
	  "performance": 1293
	}, {
	  "names": ["Qualcomm Adreno 540"],
	  "performance": 753
	}, {
	  "names": ["ARM Mali-G72 MP18"],
	  "performance": 1383
	}, {
	  "names": ["ARM Mali-G71 MP20"],
	  "performance": 996
	}, {
	  "names": ["ARM Mali-G72 MP12"],
	  "performance": 948
	}, {
	  "names": ["ARM Mali-G71 MP8"],
	  "performance": 751
	}, {
	  "names": ["AMD Radeon R5 (Carrizo)"],
	  "performance": 906
	}, {
	  "names": ["AMD Radeon R5 (Kaveri)"],
	  "performance": 537
	}, {
	  "names": ["AMD Radeon HD 7660G"],
	  "performance": 860
	}, {
	  "names": ["AMD Radeon HD 6680G2"],
	  "performance": 686
	}, {
	  "names": ["AMD Radeon HD 8550G"],
	  "performance": 821
	}, {
	  "names": ["AMD Radeon HD 7610M"],
	  "performance": 756
	}, {
	  "names": ["AMD Radeon HD 7640G"],
	  "performance": 549
	}, {
	  "names": ["PowerVR GM9446"],
	  "performance": 599
	}, {
	  "names": ["Qualcomm Adreno 530"],
	  "performance": 830
	}, {
	  "names": ["PowerVR GXA6850"],
	  "performance": 697
	}, {
	  "names": ["Apple A9", "PowerVR GT7600"],
	  "performance": 891
	}, {
	  "names": ["ARM Mali-T880 MP12"],
	  "performance": 782
	}, {
	  "names": ["ARM Mali-G76 MP4"],
	  "performance": 931
	}, {
	  "names": ["ARM Mali-T760 MP8"],
	  "performance": 551
	}, {
	  "names": ["ARM Mali-G71 MP2"],
	  "performance": 234
	}, {
	  "names": ["AMD Radeon HD 6620G"],
	  "performance": 470
	}, {
	  "names": ["AMD Radeon R4 (Stoney Ridge)"],
	  "performance": 541
	}, {
	  "names": ["Qualcomm Adreno 430"],
	  "performance": 573
	}, {
	  "names": ["AMD Radeon R5 (Beema", "Carrizo-L)"],
	  "performance": 531
	}, {
	  "names": ["AMD Radeon R4 (Kaveri)"],
	  "performance": 426
	}, {
	  "names": ["AMD Radeon HD 6540G2"],
	  "performance": 618
	}, {
	  "names": ["AMD Radeon HD 7500G"],
	  "performance": 460
	}, {
	  "names": ["AMD Radeon HD 8450G"],
	  "performance": 562
	}, {
	  "names": ["ARM Mali-G72 MP3"],
	  "performance": 430
	}, {
	  "names": ["ARM Mali-T880 MP4"],
	  "performance": 403
	}, {
	  "names": ["ARM Mali-G52 MP6"],
	  "performance": 1019
	}, {
	  "names": ["ARM Mali-G52 MP2"],
	  "performance": 454
	}, {
	  "names": ["ARM Mali-G52 MP1"],
	  "performance": 276
	}, {
	  "names": ["AMD Radeon HD 7520G"],
	  "performance": 500
	}, {
	  "names": ["AMD Radeon HD 6510G2"],
	  "performance": 537
	}, {
	  "names": ["AMD Radeon HD 7450M"],
	  "performance": 523
	}, {
	  "names": ["ARM Mali-T760 MP6"],
	  "performance": 379
	}, {
	  "names": ["ARM Mali-T880 MP2"],
	  "performance": 263
	}, {
	  "names": ["Intel HD Graphics (Braswell)"],
	  "performance": 300
	}, {
	  "names": ["PowerVR GX6450"],
	  "performance": 459
	}, {
	  "names": ["Qualcomm Adreno 420"],
	  "performance": 465
	}, {
	  "names": ["Qualcomm Adreno 620"],
	  "performance": 1230
	}, {
	  "names": ["ARM Mali-G57 MP3"],
	  "performance": 956
	}, {
	  "names": ["Intel HD Graphics (Haswell)"],
	  "performance": 504
	}, {
	  "names": ["AMD Radeon HD 6520G"],
	  "performance": 458
	}, {
	  "names": ["AMD Radeon HD 6480G"],
	  "performance": 395
	}, {
	  "names": ["Qualcomm Adreno 418"],
	  "performance": 382
	}, {
	  "names": ["Qualcomm Adreno 619L"],
	  "performance": 854
	}, {
	  "names": ["Qualcomm Adreno 618"],
	  "performance": 980
	}, {
	  "names": ["Qualcomm Adreno 616"],
	  "performance": 743
	}, {
	  "names": ["AMD Radeon R2 (Mullins", "Beema", "Carrizo-L)"],
	  "performance": 314
	}, {
	  "names": ["ARM Mali-G51 MP4"],
	  "performance": 448
	}, {
	  "names": ["AMD Radeon R6 (Mullins)"],
	  "performance": 340
	}, {
	  "names": ["Intel HD Graphics (Cherry Trail)"],
	  "performance": 287
	}, {
	  "names": ["Intel HD Graphics (Ivy Bridge)"],
	  "performance": 294
	}, {
	  "names": ["Intel HD Graphics (Sandy Bridge)"],
	  "performance": 311
	}, {
	  "names": ["Qualcomm Adreno 612"],
	  "performance": 486
	}, {
	  "names": ["Qualcomm Adreno 610"],
	  "performance": 444
	}, {
	  "names": ["Qualcomm Adreno 512"],
	  "performance": 541
	}, {
	  "names": ["Qualcomm Adreno 510"],
	  "performance": 374
	}, {
	  "names": ["Qualcomm Adreno 330"],
	  "performance": 325
	}, {
	  "names": ["PowerVR G6430"],
	  "performance": 295
	}, {
	  "names": ["PowerVR GX6250"],
	  "performance": 279
	}, {
	  "names": ["PowerVR G6400"],
	  "performance": 269
	}, {
	  "names": ["Intel HD Graphics (Bay Trail)"],
	  "performance": 193
	}, {
	  "names": ["ARM Mali-T628 MP6"],
	  "performance": 242
	}, {
	  "names": ["ARM Mali-T760 MP4"],
	  "performance": 172
	}, {
	  "names": ["PowerVR SGX554MP4"],
	  "performance": 192
	}, {
	  "names": ["ARM Mali-T628 MP4"],
	  "performance": 189
	}, {
	  "names": ["Qualcomm Adreno 509"],
	  "performance": 380
	}, {
	  "names": ["Qualcomm Adreno 508"],
	  "performance": 337
	}, {
	  "names": ["Qualcomm Adreno 506"],
	  "performance": 262
	}, {
	  "names": ["PowerVR GE8322", "IMG8322"],
	  "performance": 200
	}, {
	  "names": ["Qualcomm Adreno 505"],
	  "performance": 197
	}, {
	  "names": ["Qualcomm Adreno 504"],
	  "performance": 119
	}, {
	  "names": ["ARM Mali-T860 MP2"],
	  "performance": 182
	}, {
	  "names": ["ARM Mali-T830 MP3"],
	  "performance": 316
	}, {
	  "names": ["ARM Mali-T604 MP4"],
	  "performance": 116
	}, {
	  "names": ["PowerVR G6200"],
	  "performance": 147
	}, {
	  "names": ["Qualcomm Adreno 405"],
	  "performance": 148
	}, {
	  "names": ["ARM Mali-T830 MP2"],
	  "performance": 209
	}, {
	  "names": ["ARM Mali-T624"],
	  "performance": 160
	}, {
	  "names": ["Qualcomm Adreno 320"],
	  "performance": 164
	}, {
	  "names": ["ARM Mali-T760 MP2"],
	  "performance": 150
	}, {
	  "names": ["PowerVR GE8320"],
	  "performance": 216
	}, {
	  "names": ["PowerVR GE8300"],
	  "performance": 149
	}, {
	  "names": ["PowerVR GE8100"],
	  "performance": 64
	}, {
	  "names": ["ARM Mali-T720 MP4"],
	  "performance": 113
	}, {
	  "names": ["ARM Mali-450 MP4"],
	  "performance": 121
	}, {
	  "names": ["ARM Mali-T830 MP1"],
	  "performance": 128
	}, {
	  "names": ["ARM Mali-T720 MP2"],
	  "performance": 97
	}, {
	  "names": ["Qualcomm Adreno 308"],
	  "performance": 93
	}, {
	  "names": ["Qualcomm Adreno 306"],
	  "performance": 61
	}, {
	  "names": ["Qualcomm Adreno 305"],
	  "performance": 62
	}, {
	  "names": ["Qualcomm Adreno 304"],
	  "performance": 65
	}, {
	  "names": ["ARM Mali-T720"],
	  "performance": 55
	}, {
	  "names": ["Vivante GC7000UL"],
	  "performance": 46
	}, {
	  "names": ["Qualcomm Adreno 302"],
	  "performance": 39
	}, {
	  "names": ["Qualcomm Adreno 225"],
	  "performance": 88
	}, {
	  "names": ["Vivante GC4000"],
	  "performance": 38
	}, {
	  "names": ["Vivante GC1000+ Dual-Core"],
	  "performance": 43
	}, {
	  "names": ["Qualcomm Adreno 203"],
	  "performance": 34
	}];

	exports.database = database;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=database.js.map

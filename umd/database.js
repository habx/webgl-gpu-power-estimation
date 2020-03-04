(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.GpuPowerEstimate = global.GpuPowerEstimate || {}));
}(this, function (exports) { 'use strict';

	var database = [{
	  "names": ["FirePro 2270"],
	  "vendor": "AMD",
	  "performance": 226
	}, {
	  "names": ["FirePro M2000", "AMD FirePro M2000"],
	  "vendor": "AMD",
	  "performance": 620
	}, {
	  "names": ["FirePro M4000", "AMD FirePro M4000"],
	  "vendor": "AMD",
	  "performance": 1628
	}, {
	  "names": ["Firepro M4100", "FirePro M4100", "AMD FirePro M4100"],
	  "vendor": "AMD",
	  "performance": 1059
	}, {
	  "names": ["FirePro M4150"],
	  "vendor": "AMD",
	  "performance": 1118
	}, {
	  "names": ["FirePro M5100", "AMD FirePro M5100"],
	  "vendor": "AMD",
	  "performance": 2102
	}, {
	  "names": ["FirePro M5950", "AMD FirePro M5950"],
	  "vendor": "AMD",
	  "performance": 1314
	}, {
	  "names": ["FirePro M6000 Mobility Pro", "FirePro M6000"],
	  "vendor": "AMD",
	  "performance": 1734
	}, {
	  "names": ["FirePro M6100", "AMD FirePro M6100"],
	  "vendor": "AMD",
	  "performance": 2947
	}, {
	  "names": ["FirePro S10000"],
	  "vendor": "AMD",
	  "performance": 5235
	}, {
	  "names": ["FirePro S7000"],
	  "vendor": "AMD",
	  "performance": 4166
	}, {
	  "names": ["FirePro S9000"],
	  "vendor": "AMD",
	  "performance": 5059
	}, {
	  "names": ["FirePro V3900"],
	  "vendor": "AMD",
	  "performance": 874
	}, {
	  "names": ["FirePro V4900"],
	  "vendor": "AMD",
	  "performance": 1309
	}, {
	  "names": ["FirePro V5900"],
	  "vendor": "AMD",
	  "performance": 1534
	}, {
	  "names": ["FirePro V7900"],
	  "vendor": "AMD",
	  "performance": 2749
	}, {
	  "names": ["FirePro W2100", "AMD FirePro W2100"],
	  "vendor": "AMD",
	  "performance": 906
	}, {
	  "names": ["FirePro W4100", "AMD FirePro W4100"],
	  "vendor": "AMD",
	  "performance": 1606
	}, {
	  "names": ["FirePro W4170M", "AMD FirePro W4170M"],
	  "vendor": "AMD",
	  "performance": 1279
	}, {
	  "names": ["Firepro W4190M", "FirePro W4190M", "AMD FirePro W4190M"],
	  "vendor": "AMD",
	  "performance": 1262
	}, {
	  "names": ["FirePro W4300"],
	  "vendor": "AMD",
	  "performance": 2909
	}, {
	  "names": ["FirePro W5000"],
	  "vendor": "AMD",
	  "performance": 3090
	}, {
	  "names": ["FirePro W5100"],
	  "vendor": "AMD",
	  "performance": 3031
	}, {
	  "names": ["FirePro W5130M", "AMD FirePro W5130M"],
	  "vendor": "AMD",
	  "performance": 1674
	}, {
	  "names": ["Firepro W5170M", "FirePro W5170M", "AMD FirePro W5170M"],
	  "vendor": "AMD",
	  "performance": 2175
	}, {
	  "names": ["FirePro W600"],
	  "vendor": "AMD",
	  "performance": 1703
	}, {
	  "names": ["FirePro W7000"],
	  "vendor": "AMD",
	  "performance": 4360
	}, {
	  "names": ["FirePro W7100"],
	  "vendor": "AMD",
	  "performance": 5413
	}, {
	  "names": ["FirePro W7170M", "AMD FirePro W7170M"],
	  "vendor": "AMD",
	  "performance": 4578
	}, {
	  "names": ["FirePro W8000"],
	  "vendor": "AMD",
	  "performance": 4673
	}, {
	  "names": ["FirePro W8100"],
	  "vendor": "AMD",
	  "performance": 6164
	}, {
	  "names": ["FirePro W9000"],
	  "vendor": "AMD",
	  "performance": 5305
	}, {
	  "names": ["FirePro W9100"],
	  "vendor": "AMD",
	  "performance": 7186
	}, {
	  "names": ["GeForce 315M", "NVIDIA GeForce 315M"],
	  "vendor": "NVIDIA",
	  "performance": 208
	}, {
	  "names": ["GeForce 410M", "NVIDIA GeForce 410M"],
	  "vendor": "NVIDIA",
	  "performance": 355
	}, {
	  "names": ["GeForce 505", "GeForce 505 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 186
	}, {
	  "names": ["GeForce 510", "GeForce 510 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 310
	}, {
	  "names": ["GeForce 605", "GeForce 605 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 323
	}, {
	  "names": ["GeForce 610M", "NVIDIA GeForce 610M"],
	  "vendor": "NVIDIA",
	  "performance": 405
	}, {
	  "names": ["GeForce 615"],
	  "vendor": "NVIDIA",
	  "performance": 548
	}, {
	  "names": ["GeForce 705M", "NVIDIA GeForce 705M"],
	  "vendor": "NVIDIA",
	  "performance": 455
	}, {
	  "names": ["GeForce 710A"],
	  "vendor": "NVIDIA",
	  "performance": 538
	}, {
	  "names": ["GeForce 710M", "NVIDIA GeForce 710M"],
	  "vendor": "NVIDIA",
	  "performance": 573
	}, {
	  "names": ["GeForce 720A"],
	  "vendor": "NVIDIA",
	  "performance": 724
	}, {
	  "names": ["GeForce 730A", "GeForce GT 730A"],
	  "vendor": "NVIDIA",
	  "performance": 812
	}, {
	  "names": ["GeForce 800A"],
	  "vendor": "NVIDIA",
	  "performance": 428
	}, {
	  "names": ["GeForce 800M"],
	  "vendor": "NVIDIA",
	  "performance": 555
	}, {
	  "names": ["GeForce 810A"],
	  "vendor": "NVIDIA",
	  "performance": 638
	}, {
	  "names": ["GeForce 810M"],
	  "vendor": "NVIDIA",
	  "performance": 490
	}, {
	  "names": ["GeForce 820A"],
	  "vendor": "NVIDIA",
	  "performance": 706
	}, {
	  "names": ["GeForce 820M", "NVIDIA GeForce 820M"],
	  "vendor": "NVIDIA",
	  "performance": 621
	}, {
	  "names": ["GeForce 825M", "NVIDIA GeForce 825M"],
	  "vendor": "NVIDIA",
	  "performance": 768
	}, {
	  "names": ["GeForce 830A"],
	  "vendor": "NVIDIA",
	  "performance": 1004
	}, {
	  "names": ["GeForce 830M", "NVIDIA GeForce 830M"],
	  "vendor": "NVIDIA",
	  "performance": 913
	}, {
	  "names": ["GeForce 840A"],
	  "vendor": "NVIDIA",
	  "performance": 888
	}, {
	  "names": ["GeForce 840M", "NVIDIA GeForce 840M"],
	  "vendor": "NVIDIA",
	  "performance": 931
	}, {
	  "names": ["GeForce 845M", "NVIDIA GeForce 845M"],
	  "vendor": "NVIDIA",
	  "performance": 1151
	}, {
	  "names": ["GeForce 910M", "NVIDIA GeForce 910M"],
	  "vendor": "NVIDIA",
	  "performance": 500
	}, {
	  "names": ["GeForce 920A"],
	  "vendor": "NVIDIA",
	  "performance": 919
	}, {
	  "names": ["GeForce 920M", "NVIDIA GeForce 920M"],
	  "vendor": "NVIDIA",
	  "performance": 741
	}, {
	  "names": ["GeForce 920MX", "NVIDIA GeForce 920MX"],
	  "vendor": "NVIDIA",
	  "performance": 1096
	}, {
	  "names": ["GeForce 930A"],
	  "vendor": "NVIDIA",
	  "performance": 1227
	}, {
	  "names": ["GeForce 930M", "NVIDIA GeForce 930M"],
	  "vendor": "NVIDIA",
	  "performance": 966
	}, {
	  "names": ["GeForce 930MX", "NVIDIA GeForce 930MX"],
	  "vendor": "NVIDIA",
	  "performance": 1250
	}, {
	  "names": ["GeForce 940A"],
	  "vendor": "NVIDIA",
	  "performance": 1031
	}, {
	  "names": ["GeForce 940M", "NVIDIA GeForce 940M"],
	  "vendor": "NVIDIA",
	  "performance": 1008
	}, {
	  "names": ["GeForce 940MX", "NVIDIA GeForce 940MX"],
	  "vendor": "NVIDIA",
	  "performance": 1381
	}, {
	  "names": ["GeForce 945M", "NVIDIA GeForce 945M"],
	  "vendor": "NVIDIA",
	  "performance": 1558
	}, {
	  "names": ["GeForce GT 1030", "NVIDIA GeForce GT 1030 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 2328
	}, {
	  "names": ["GeForce GT 440"],
	  "vendor": "NVIDIA",
	  "performance": 841
	}, {
	  "names": ["GeForce GT 520"],
	  "vendor": "NVIDIA",
	  "performance": 365
	}, {
	  "names": ["GeForce GT 520M", "NVIDIA GeForce GT 520M"],
	  "vendor": "NVIDIA",
	  "performance": 385
	}, {
	  "names": ["GeForce GT 520MX", "NVIDIA GeForce GT 520MX"],
	  "vendor": "NVIDIA",
	  "performance": 406
	}, {
	  "names": ["GeForce GT 525M", "NVIDIA GeForce GT 525M"],
	  "vendor": "NVIDIA",
	  "performance": 600
	}, {
	  "names": ["GeForce GT 530", "GeForce GT 530 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 746
	}, {
	  "names": ["GeForce GT 540M", "NVIDIA GeForce GT 540M"],
	  "vendor": "NVIDIA",
	  "performance": 649
	}, {
	  "names": ["GeForce GT 545"],
	  "vendor": "NVIDIA",
	  "performance": 1289
	}, {
	  "names": ["GeForce GT 550M", "NVIDIA GeForce GT 550M"],
	  "vendor": "NVIDIA",
	  "performance": 720
	}, {
	  "names": ["GeForce GT 555M", "NVIDIA GeForce GT 555M"],
	  "vendor": "NVIDIA",
	  "performance": 891
	}, {
	  "names": ["GeForce GT 610"],
	  "vendor": "NVIDIA",
	  "performance": 349
	}, {
	  "names": ["GeForce GT 620"],
	  "vendor": "NVIDIA",
	  "performance": 430
	}, {
	  "names": ["GeForce GT 620M", "NVIDIA GeForce GT 620M"],
	  "vendor": "NVIDIA",
	  "performance": 575
	}, {
	  "names": ["GeForce GT 625", "GeForce GT 625 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 438
	}, {
	  "names": ["GeForce GT 625M", "NVIDIA GeForce GT 625M"],
	  "vendor": "NVIDIA",
	  "performance": 500
	}, {
	  "names": ["GeForce GT 630"],
	  "vendor": "NVIDIA",
	  "performance": 746
	}, {
	  "names": ["GeForce GT 630M", "NVIDIA GeForce GT 630M"],
	  "vendor": "NVIDIA",
	  "performance": 691
	}, {
	  "names": ["GeForce GT 635", "GeForce GT 635 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 912
	}, {
	  "names": ["GeForce GT 635M", "NVIDIA GeForce GT 635M"],
	  "vendor": "NVIDIA",
	  "performance": 701
	}, {
	  "names": ["GeForce GT 640"],
	  "vendor": "NVIDIA",
	  "performance": 1281
	}, {
	  "names": ["GeForce GT 640M", "NVIDIA GeForce GT 640M"],
	  "vendor": "NVIDIA",
	  "performance": 973
	}, {
	  "names": ["GeForce GT 640M LE", "NVIDIA GeForce GT 640M LE"],
	  "vendor": "NVIDIA",
	  "performance": 790
	}, {
	  "names": ["GeForce GT 645", "GeForce GT 645 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2250
	}, {
	  "names": ["GeForce GT 645M", "NVIDIA GeForce GT 645M"],
	  "vendor": "NVIDIA",
	  "performance": 914
	}, {
	  "names": ["GeForce GT 650M", "NVIDIA GeForce GT 650M"],
	  "vendor": "NVIDIA",
	  "performance": 1236
	}, {
	  "names": ["GeForce GT 705", "GeForce GT 705 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 417
	}, {
	  "names": ["GeForce GT 710"],
	  "vendor": "NVIDIA",
	  "performance": 689
	}, {
	  "names": ["GeForce GT 710M"],
	  "vendor": "NVIDIA",
	  "performance": 553
	}, {
	  "names": ["GeForce GT 720"],
	  "vendor": "NVIDIA",
	  "performance": 716
	}, {
	  "names": ["GeForce GT 720A"],
	  "vendor": "NVIDIA",
	  "performance": 660
	}, {
	  "names": ["GeForce GT 720M", "NVIDIA GeForce GT 720M"],
	  "vendor": "NVIDIA",
	  "performance": 564
	}, {
	  "names": ["GeForce GT 730"],
	  "vendor": "NVIDIA",
	  "performance": 921
	}, {
	  "names": ["GeForce GT 730M", "NVIDIA GeForce GT 730M"],
	  "vendor": "NVIDIA",
	  "performance": 845
	}, {
	  "names": ["GeForce GT 735M", "NVIDIA GeForce GT 735M"],
	  "vendor": "NVIDIA",
	  "performance": 677
	}, {
	  "names": ["GeForce GT 740"],
	  "vendor": "NVIDIA",
	  "performance": 1568
	}, {
	  "names": ["GeForce GT 740M", "NVIDIA GeForce GT 740M"],
	  "vendor": "NVIDIA",
	  "performance": 791
	}, {
	  "names": ["GeForce GT 745A"],
	  "vendor": "NVIDIA",
	  "performance": 1144
	}, {
	  "names": ["GeForce GT 745M", "NVIDIA GeForce GT 745M"],
	  "vendor": "NVIDIA",
	  "performance": 979
	}, {
	  "names": ["GeForce GT 750M", "NVIDIA GeForce GT 750M"],
	  "vendor": "NVIDIA",
	  "performance": 1300
	}, {
	  "names": ["GeForce GT 755M", "NVIDIA GeForce GT 755M"],
	  "vendor": "NVIDIA",
	  "performance": 1605
	}, {
	  "names": ["GeForce GT 820M"],
	  "vendor": "NVIDIA",
	  "performance": 705
	}, {
	  "names": ["GeForce GTX 1050", "NVIDIA GeForce GTX 1050 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 4810
	}, {
	  "names": ["GeForce GTX 1050 (Mobile)", "GeForce GTX 1050 Mobile", "NVIDIA GeForce GTX 1050 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 4499
	}, {
	  "names": ["GeForce GTX 1050 Ti", "NVIDIA GeForce GTX 1050 Ti (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 6079
	}, {
	  "names": ["GeForce GTX 1050 Ti (Mobile)", "GeForce GTX 1050 Ti Mobile", "NVIDIA GeForce GTX 1050 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 5990
	}, {
	  "names": ["GeForce GTX 1050 Ti with Max-Q Design", "GeForce GTX 1050 Ti Max-Q", "NVIDIA GeForce GTX 1050 Ti Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 5781
	}, {
	  "names": ["GeForce GTX 1050 with Max-Q Design", "GeForce GTX 1050 Max-Q", "NVIDIA GeForce GTX 1050 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 3866
	}, {
	  "names": ["GeForce GTX 1060", "GeForce GTX 1060 Mobile", "NVIDIA GeForce GTX 1060 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 9098
	}, {
	  "names": ["GeForce GTX 1060 (Mobile)", "NVIDIA GeForce GTX 1060 (Laptop)"],
	  "performance": 7638
	}, {
	  "names": ["GeForce GTX 1060 with Max-Q Design", "GeForce GTX 1060 Max-Q", "NVIDIA GeForce GTX 1060 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 7855
	}, {
	  "names": ["GeForce GTX 1070", "NVIDIA GeForce GTX 1070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 11389
	}, {
	  "names": ["GeForce GTX 1070 (Mobile)", "GeForce GTX 1070 Mobile", "NVIDIA GeForce GTX 1070 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 9438
	}, {
	  "names": ["GeForce GTX 1070 Ti", "NVIDIA GeForce GTX 1070 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12288
	}, {
	  "names": ["GeForce GTX 1070 with Max-Q Design", "GeForce GTX 1070 Max-Q", "NVIDIA GeForce GTX 1070 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9442
	}, {
	  "names": ["GeForce GTX 1080", "NVIDIA GeForce GTX 1080 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12449
	}, {
	  "names": ["GeForce GTX 1080 Ti", "NVIDIA GeForce GTX 1080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 14197
	}, {
	  "names": ["GeForce GTX 1080 with Max-Q Design", "GeForce GTX 1080 Max-Q", "NVIDIA GeForce GTX 1080 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 10174
	}, {
	  "names": ["GeForce GTX 1650"],
	  "vendor": "NVIDIA",
	  "performance": 7930
	}, {
	  "names": ["GeForce GTX 1650 (Mobile)", "GeForce GTX 1650 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 6942
	}, {
	  "names": ["GeForce GTX 1650 with Max-Q Design", "GeForce GTX 1650 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 5923
	}, {
	  "names": ["GeForce GTX 1660", "NVIDIA GeForce GTX 1660 Ti (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 10832
	}, {
	  "names": ["GeForce GTX 1660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 11468
	}, {
	  "names": ["GeForce GTX 460 v2"],
	  "vendor": "NVIDIA",
	  "performance": 2496
	}, {
	  "names": ["GeForce GTX 485M", "NVIDIA GeForce GTX 485M"],
	  "vendor": "NVIDIA",
	  "performance": 2400
	}, {
	  "names": ["GeForce GTX 550 Ti", "NVIDIA GeForce GTX 550 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 1921
	}, {
	  "names": ["GeForce GTX 555", "GeForce GTX 555 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2162
	}, {
	  "names": ["GeForce GTX 560", "NVIDIA GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3116
	}, {
	  "names": ["GeForce GTX 560 SE"],
	  "vendor": "NVIDIA",
	  "performance": 2201
	}, {
	  "names": ["GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3528
	}, {
	  "names": ["GeForce GTX 560M", "NVIDIA GeForce GTX 560M"],
	  "vendor": "NVIDIA",
	  "performance": 1542
	}, {
	  "names": ["GeForce GTX 570M", "NVIDIA GeForce GTX 570M"],
	  "vendor": "NVIDIA",
	  "performance": 2024
	}, {
	  "names": ["GeForce GTX 580M", "NVIDIA GeForce GTX 580M"],
	  "vendor": "NVIDIA",
	  "performance": 2279
	}, {
	  "names": ["GeForce GTX 590", "NVIDIA GeForce GTX 590"],
	  "vendor": "NVIDIA",
	  "performance": 4216
	}, {
	  "names": ["GeForce GTX 645", "GeForce GTX 645 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 1939
	}, {
	  "names": ["GeForce GTX 650"],
	  "vendor": "NVIDIA",
	  "performance": 1837
	}, {
	  "names": ["GeForce GTX 650 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 2659
	}, {
	  "names": ["GeForce GTX 650 Ti BOOST", "GeForce GTX 650 Ti Boost"],
	  "vendor": "NVIDIA",
	  "performance": 3536
	}, {
	  "names": ["GeForce GTX 660", "NVIDIA GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 4130
	}, {
	  "names": ["GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 4654
	}, {
	  "names": ["GeForce GTX 660M", "NVIDIA GeForce GTX 660M"],
	  "vendor": "NVIDIA",
	  "performance": 1449
	}, {
	  "names": ["GeForce GTX 670"],
	  "vendor": "NVIDIA",
	  "performance": 5362
	}, {
	  "names": ["GeForce GTX 670M", "NVIDIA GeForce GTX 670M"],
	  "vendor": "NVIDIA",
	  "performance": 1953
	}, {
	  "names": ["GeForce GTX 670MX", "NVIDIA GeForce GTX 670MX"],
	  "vendor": "NVIDIA",
	  "performance": 2080
	}, {
	  "names": ["GeForce GTX 675M", "NVIDIA GeForce GTX 675M"],
	  "vendor": "NVIDIA",
	  "performance": 2143
	}, {
	  "names": ["GeForce GTX 675MX", "NVIDIA GeForce GTX 675MX"],
	  "vendor": "NVIDIA",
	  "performance": 2476
	}, {
	  "names": ["GeForce GTX 680", "NVIDIA GeForce GTX 680"],
	  "vendor": "NVIDIA",
	  "performance": 5666
	}, {
	  "names": ["GeForce GTX 680M", "NVIDIA GeForce GTX 680M"],
	  "vendor": "NVIDIA",
	  "performance": 3349
	}, {
	  "names": ["GeForce GTX 680MX", "GeForce GTX 680MX Mac Edition", "NVIDIA GeForce GTX 680MX"],
	  "vendor": "NVIDIA",
	  "performance": 4270
	}, {
	  "names": ["GeForce GTX 690"],
	  "vendor": "NVIDIA",
	  "performance": 5407
	}, {
	  "names": ["GeForce GTX 745", "GeForce GTX 745 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2203
	}, {
	  "names": ["GeForce GTX 750", "NVIDIA GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3333
	}, {
	  "names": ["GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3778
	}, {
	  "names": ["GeForce GTX 760", "NVIDIA GeForce GTX 760"],
	  "vendor": "NVIDIA",
	  "performance": 4939
	}, {
	  "names": ["GeForce GTX 760 Ti", "GeForce GTX 760 Ti OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5118
	}, {
	  "names": ["GeForce GTX 760 Ti OEM", "GeForce GTX 760 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5427
	}, {
	  "names": ["GeForce GTX 760A"],
	  "vendor": "NVIDIA",
	  "performance": 1281
	}, {
	  "names": ["GeForce GTX 760M", "NVIDIA GeForce GTX 760M"],
	  "vendor": "NVIDIA",
	  "performance": 1440
	}, {
	  "names": ["GeForce GTX 765M", "NVIDIA GeForce GTX 765M"],
	  "vendor": "NVIDIA",
	  "performance": 1889
	}, {
	  "names": ["GeForce GTX 770"],
	  "vendor": "NVIDIA",
	  "performance": 6062
	}, {
	  "names": ["GeForce GTX 770M", "NVIDIA GeForce GTX 770M"],
	  "vendor": "NVIDIA",
	  "performance": 2669
	}, {
	  "names": ["GeForce GTX 775M", "GeForce GTX 775M Mac Edition", "NVIDIA GeForce GTX 775M"],
	  "vendor": "NVIDIA",
	  "performance": 4222
	}, {
	  "names": ["GeForce GTX 780", "NVIDIA GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 7956
	}, {
	  "names": ["GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 8893
	}, {
	  "names": ["GeForce GTX 780M", "NVIDIA GeForce GTX 780M"],
	  "vendor": "NVIDIA",
	  "performance": 4039
	}, {
	  "names": ["GeForce GTX 850A"],
	  "vendor": "NVIDIA",
	  "performance": 1049
	}, {
	  "names": ["GeForce GTX 850M", "NVIDIA GeForce GTX 850M"],
	  "vendor": "NVIDIA",
	  "performance": 1669
	}, {
	  "names": ["GeForce GTX 860M", "NVIDIA GeForce GTX 860M"],
	  "vendor": "NVIDIA",
	  "performance": 1995
	}, {
	  "names": ["GeForce GTX 870M", "NVIDIA GeForce GTX 870M"],
	  "vendor": "NVIDIA",
	  "performance": 2483
	}, {
	  "names": ["GeForce GTX 880M", "NVIDIA GeForce GTX 880M"],
	  "vendor": "NVIDIA",
	  "performance": 3746
	}, {
	  "names": ["GeForce GTX 950", "NVIDIA GeForce GTX 950"],
	  "vendor": "NVIDIA",
	  "performance": 5253
	}, {
	  "names": ["GeForce GTX 950A"],
	  "vendor": "NVIDIA",
	  "performance": 1884
	}, {
	  "names": ["GeForce GTX 950M", "NVIDIA GeForce GTX 950M"],
	  "vendor": "NVIDIA",
	  "performance": 1964
	}, {
	  "names": ["GeForce GTX 960", "NVIDIA GeForce GTX 960"],
	  "vendor": "NVIDIA",
	  "performance": 5841
	}, {
	  "names": ["GeForce GTX 960A"],
	  "vendor": "NVIDIA",
	  "performance": 2410
	}, {
	  "names": ["GeForce GTX 960M", "NVIDIA GeForce GTX 960M"],
	  "vendor": "NVIDIA",
	  "performance": 2426
	}, {
	  "names": ["GeForce GTX 965M", "NVIDIA GeForce GTX 965M"],
	  "vendor": "NVIDIA",
	  "performance": 3274
	}, {
	  "names": ["GeForce GTX 970", "NVIDIA GeForce GTX 970"],
	  "vendor": "NVIDIA",
	  "performance": 8663
	}, {
	  "names": ["GeForce GTX 970M", "NVIDIA GeForce GTX 970M"],
	  "vendor": "NVIDIA",
	  "performance": 4282
	}, {
	  "names": ["GeForce GTX 980", "NVIDIA GeForce GTX 980"],
	  "vendor": "NVIDIA",
	  "performance": 9692
	}, {
	  "names": ["GeForce GTX 980 Ti", "NVIDIA GeForce GTX 980 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 11449
	}, {
	  "names": ["GeForce GTX 980M", "NVIDIA GeForce GTX 980M"],
	  "vendor": "NVIDIA",
	  "performance": 5998
	}, {
	  "names": ["GeForce GTX Titan", "GeForce GTX TITAN"],
	  "vendor": "NVIDIA",
	  "performance": 7939
	}, {
	  "names": ["GeForce GTX TITAN Black", "GeForce GTX TITAN BLACK"],
	  "vendor": "NVIDIA",
	  "performance": 8653
	}, {
	  "names": ["GeForce GTX TITAN X"],
	  "vendor": "NVIDIA",
	  "performance": 10691
	}, {
	  "names": ["GeForce GTX TITAN Z"],
	  "vendor": "NVIDIA",
	  "performance": 7647
	}, {
	  "names": ["GeForce MX110", "NVIDIA GeForce MX110"],
	  "vendor": "NVIDIA",
	  "performance": 1633
	}, {
	  "names": ["GeForce MX130", "NVIDIA GeForce MX130"],
	  "vendor": "NVIDIA",
	  "performance": 1981
	}, {
	  "names": ["GeForce MX150", "NVIDIA GeForce MX150"],
	  "vendor": "NVIDIA",
	  "performance": 2254
	}, {
	  "names": ["GeForce MX230", "NVIDIA GeForce MX230"],
	  "vendor": "NVIDIA",
	  "performance": 2150
	}, {
	  "names": ["GeForce RTX 2060", "NVIDIA GeForce RTX 2060 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12802
	}, {
	  "names": ["GeForce RTX 2060 (Mobile)", "GeForce RTX 2060 Mobile", "NVIDIA GeForce RTX 2060 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 10478
	}, {
	  "names": ["GeForce RTX 2070", "NVIDIA GeForce RTX 2070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 14000
	}, {
	  "names": ["GeForce RTX 2070 (Mobile)", "GeForce RTX 2070 Mobile", "NVIDIA GeForce RTX 2070 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 11260
	}, {
	  "names": ["GeForce RTX 2070 with Max-Q Design", "GeForce RTX 2070 Max-Q", "NVIDIA GeForce RTX 2070 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 11178
	}, {
	  "names": ["GeForce RTX 2080", "NVIDIA GeForce RTX 2080 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 15465
	}, {
	  "names": ["GeForce RTX 2080 (Mobile)", "GeForce RTX 2080 Mobile", "NVIDIA GeForce RTX 2080 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 13129
	}, {
	  "names": ["GeForce RTX 2080 Ti", "NVIDIA GeForce RTX 2080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 16748
	}, {
	  "names": ["GeForce RTX 2080 with Max-Q Design", "GeForce RTX 2080 Max-Q", "NVIDIA GeForce RTX 2080 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 12321
	}, {
	  "names": ["GRID K1"],
	  "vendor": "NVIDIA",
	  "performance": 810
	}, {
	  "names": ["GRID K120Q"],
	  "vendor": "NVIDIA",
	  "performance": 293
	}, {
	  "names": ["GRID K140Q"],
	  "vendor": "NVIDIA",
	  "performance": 727
	}, {
	  "names": ["GRID K160Q"],
	  "vendor": "NVIDIA",
	  "performance": 739
	}, {
	  "names": ["GRID K180Q"],
	  "vendor": "NVIDIA",
	  "performance": 782
	}, {
	  "names": ["GRID K2"],
	  "vendor": "NVIDIA",
	  "performance": 3772
	}, {
	  "names": ["GRID K220Q"],
	  "vendor": "NVIDIA",
	  "performance": 912
	}, {
	  "names": ["GRID K240Q"],
	  "vendor": "NVIDIA",
	  "performance": 2143
	}, {
	  "names": ["GRID K260Q"],
	  "vendor": "NVIDIA",
	  "performance": 2940
	}, {
	  "names": ["GRID K280Q"],
	  "vendor": "NVIDIA",
	  "performance": 2362
	}, {
	  "names": ["GRID K520"],
	  "vendor": "NVIDIA",
	  "performance": 4384
	}, {
	  "names": ["GRID M10-8Q"],
	  "vendor": "NVIDIA",
	  "performance": 2606
	}, {
	  "names": ["GRID M60-1Q"],
	  "vendor": "NVIDIA",
	  "performance": 4680
	}, {
	  "names": ["GRID M60-2Q"],
	  "vendor": "NVIDIA",
	  "performance": 5291
	}, {
	  "names": ["GRID M60-8Q"],
	  "vendor": "NVIDIA",
	  "performance": 3883
	}, {
	  "names": ["Intel HD 3000", "Intel HD Graphics 3000"],
	  "performance": 314
	}, {
	  "names": ["Intel HD 4000", "Intel HD Graphics 4000"],
	  "performance": 457
	}, {
	  "names": ["Intel HD 4400", "Intel HD Graphics 4400"],
	  "performance": 570
	}, {
	  "names": ["Intel HD 4600", "Intel HD Graphics 4600"],
	  "performance": 715
	}, {
	  "names": ["Intel HD 500", "Intel HD Graphics 500"],
	  "performance": 368
	}, {
	  "names": ["Intel HD 5000", "Intel HD Graphics 5000"],
	  "performance": 601
	}, {
	  "names": ["Intel HD 505", "Intel HD Graphics 505"],
	  "performance": 410
	}, {
	  "names": ["Intel HD 510", "Intel HD Graphics 510"],
	  "performance": 624
	}, {
	  "names": ["Intel HD 515", "Intel HD Graphics 515"],
	  "performance": 648
	}, {
	  "names": ["Intel HD 520", "Intel HD Graphics 520"],
	  "performance": 846
	}, {
	  "names": ["Intel HD 530", "Intel HD Graphics 530"],
	  "performance": 1010
	}, {
	  "names": ["Intel HD 5300", "Intel HD Graphics 5300"],
	  "performance": 401
	}, {
	  "names": ["Intel HD 5500", "Intel HD Graphics 5500"],
	  "performance": 598
	}, {
	  "names": ["Intel HD 5600", "Intel HD Graphics 5600"],
	  "performance": 663
	}, {
	  "names": ["Intel HD 6000", "Intel HD Graphics 6000"],
	  "performance": 831
	}, {
	  "names": ["Intel HD 610", "Intel HD Graphics 610"],
	  "performance": 716
	}, {
	  "names": ["Intel HD 615", "Intel HD Graphics 615"],
	  "performance": 745
	}, {
	  "names": ["Intel HD 630", "Intel HD Graphics 630"],
	  "performance": 1141
	}, {
	  "names": ["Intel HD Graphics 620", "HD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 937
	}, {
	  "names": ["Intel HD P530", "Intel HD Graphics P530"],
	  "performance": 1060
	}, {
	  "names": ["Intel HD P630", "Intel HD Graphics P630"],
	  "performance": 1726
	}, {
	  "names": ["Intel Iris 5100", "Intel Iris Graphics 5100"],
	  "performance": 750
	}, {
	  "names": ["Intel Iris 540", "Intel Iris Graphics 540"],
	  "performance": 1344
	}, {
	  "names": ["Intel Iris 550", "Intel Iris Graphics 550"],
	  "performance": 1587
	}, {
	  "names": ["Intel Iris 6100", "Intel Iris Graphics 6100"],
	  "performance": 976
	}, {
	  "names": ["Intel Iris Plus 640", "Intel Iris Plus Graphics 640"],
	  "performance": 1445
	}, {
	  "names": ["Intel Iris Plus 650", "Intel Iris Plus Graphics 650"],
	  "performance": 1583
	}, {
	  "names": ["Intel Iris Plus 655", "Intel Iris Plus Graphics 655"],
	  "performance": 1970
	}, {
	  "names": ["Intel Iris Pro 5200", "Intel Iris Pro Graphics 5200"],
	  "performance": 1171
	}, {
	  "names": ["Intel Iris Pro 580", "Intel Iris Pro Graphics 580"],
	  "performance": 1882
	}, {
	  "names": ["Intel Iris Pro Graphics 6200", "Iris Pro Graphics 6200"],
	  "vendor": "Intel",
	  "performance": 1544
	}, {
	  "names": ["Intel Iris Pro P580", "Intel Iris Pro Graphics P580"],
	  "performance": 2064
	}, {
	  "names": ["Intel UHD 600", "Intel UHD Graphics 600"],
	  "performance": 372
	}, {
	  "names": ["Intel UHD 605", "Intel UHD Graphics 605"],
	  "performance": 433
	}, {
	  "names": ["Intel UHD 615", "Intel UHD Graphics 615"],
	  "performance": 789
	}, {
	  "names": ["Intel UHD 617", "Intel UHD Graphics 617"],
	  "performance": 878
	}, {
	  "names": ["Intel UHD 620", "Intel UHD Graphics 620"],
	  "performance": 888
	}, {
	  "names": ["Intel UHD 630", "Intel UHD Graphics 630"],
	  "performance": 1345
	}, {
	  "names": ["Intel UHD Graphics 620", "UHD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 1078
	}, {
	  "names": ["Mobility Radeon HD 5570"],
	  "vendor": "ATI",
	  "performance": 723
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
	  "performance": 13659
	}, {
	  "names": ["NVIDIA TITAN Xp", "TITAN Xp"],
	  "vendor": "NVIDIA",
	  "performance": 14272
	}, {
	  "names": ["NVS 300"],
	  "vendor": "NVIDIA",
	  "performance": 181
	}, {
	  "names": ["NVS 310"],
	  "vendor": "NVIDIA",
	  "performance": 295
	}, {
	  "names": ["NVS 315"],
	  "vendor": "NVIDIA",
	  "performance": 349
	}, {
	  "names": ["NVS 4200M", "NVIDIA NVS 4200M"],
	  "vendor": "NVIDIA",
	  "performance": 366
	}, {
	  "names": ["NVS 510"],
	  "vendor": "NVIDIA",
	  "performance": 764
	}, {
	  "names": ["NVS 5200M", "NVIDIA NVS 5200M"],
	  "vendor": "NVIDIA",
	  "performance": 666
	}, {
	  "names": ["NVS 5400M", "NVIDIA NVS 5400M"],
	  "vendor": "NVIDIA",
	  "performance": 796
	}, {
	  "names": ["NVS 810"],
	  "vendor": "NVIDIA",
	  "performance": 939
	}, {
	  "names": ["P106-100"],
	  "vendor": "NVIDIA",
	  "performance": 3801
	}, {
	  "names": ["Quadro 1000M", "NVIDIA Quadro 1000M"],
	  "vendor": "NVIDIA",
	  "performance": 752
	}, {
	  "names": ["Quadro 2000D"],
	  "vendor": "NVIDIA",
	  "performance": 1279
	}, {
	  "names": ["Quadro 2000M", "NVIDIA Quadro 2000M"],
	  "vendor": "NVIDIA",
	  "performance": 1034
	}, {
	  "names": ["Quadro 3000M", "NVIDIA Quadro 3000M"],
	  "vendor": "NVIDIA",
	  "performance": 1468
	}, {
	  "names": ["Quadro 400"],
	  "vendor": "NVIDIA",
	  "performance": 236
	}, {
	  "names": ["Quadro 4000M", "NVIDIA Quadro 4000M"],
	  "vendor": "NVIDIA",
	  "performance": 1788
	}, {
	  "names": ["Quadro 410"],
	  "vendor": "NVIDIA",
	  "performance": 404
	}, {
	  "names": ["Quadro 5000"],
	  "vendor": "NVIDIA",
	  "performance": 2857
	}, {
	  "names": ["Quadro 500M"],
	  "vendor": "NVIDIA",
	  "performance": 664
	}, {
	  "names": ["Quadro 5010M", "NVIDIA Quadro 5010M"],
	  "vendor": "NVIDIA",
	  "performance": 1833
	}, {
	  "names": ["Quadro GP100"],
	  "vendor": "NVIDIA",
	  "performance": 12662
	}, {
	  "names": ["Quadro GV100"],
	  "vendor": "NVIDIA",
	  "performance": 12721
	}, {
	  "names": ["Quadro K1000M", "NVIDIA Quadro K1000M"],
	  "vendor": "NVIDIA",
	  "performance": 794
	}, {
	  "names": ["Quadro K1100M", "NVIDIA Quadro K1100M"],
	  "vendor": "NVIDIA",
	  "performance": 1050
	}, {
	  "names": ["Quadro K1200"],
	  "vendor": "NVIDIA",
	  "performance": 3044
	}, {
	  "names": ["Quadro K2000"],
	  "vendor": "NVIDIA",
	  "performance": 1725
	}, {
	  "names": ["Quadro K2000D"],
	  "vendor": "NVIDIA",
	  "performance": 1678
	}, {
	  "names": ["Quadro K2000M", "NVIDIA Quadro K2000M"],
	  "vendor": "NVIDIA",
	  "performance": 1081
	}, {
	  "names": ["Quadro K2100M", "NVIDIA Quadro K2100M"],
	  "vendor": "NVIDIA",
	  "performance": 1351
	}, {
	  "names": ["Quadro K2200"],
	  "vendor": "NVIDIA",
	  "performance": 3604
	}, {
	  "names": ["Quadro K2200M"],
	  "vendor": "NVIDIA",
	  "performance": 2812
	}, {
	  "names": ["Quadro K3000M", "NVIDIA Quadro K3000M"],
	  "vendor": "NVIDIA",
	  "performance": 1749
	}, {
	  "names": ["Quadro K3100M", "NVIDIA Quadro K3100M"],
	  "vendor": "NVIDIA",
	  "performance": 2095
	}, {
	  "names": ["Quadro K4000"],
	  "vendor": "NVIDIA",
	  "performance": 2880
	}, {
	  "names": ["Quadro K4000M", "NVIDIA Quadro K4000M"],
	  "vendor": "NVIDIA",
	  "performance": 2254
	}, {
	  "names": ["Quadro K4100M", "NVIDIA Quadro K4100M"],
	  "vendor": "NVIDIA",
	  "performance": 2690
	}, {
	  "names": ["Quadro K420"],
	  "vendor": "NVIDIA",
	  "performance": 830
	}, {
	  "names": ["Quadro K4200"],
	  "vendor": "NVIDIA",
	  "performance": 4480
	}, {
	  "names": ["Quadro K5000"],
	  "vendor": "NVIDIA",
	  "performance": 4020
	}, {
	  "names": ["Quadro K5000M", "NVIDIA Quadro K5000M"],
	  "vendor": "NVIDIA",
	  "performance": 2572
	}, {
	  "names": ["Quadro K5100M", "NVIDIA Quadro K5100M"],
	  "vendor": "NVIDIA",
	  "performance": 3137
	}, {
	  "names": ["Quadro K510M", "NVIDIA Quadro K510M"],
	  "vendor": "NVIDIA",
	  "performance": 651
	}, {
	  "names": ["Quadro K5200"],
	  "vendor": "NVIDIA",
	  "performance": 6091
	}, {
	  "names": ["Quadro K600"],
	  "vendor": "NVIDIA",
	  "performance": 821
	}, {
	  "names": ["Quadro K6000"],
	  "vendor": "NVIDIA",
	  "performance": 7489
	}, {
	  "names": ["Quadro K610M", "NVIDIA Quadro K610M"],
	  "vendor": "NVIDIA",
	  "performance": 758
	}, {
	  "names": ["Quadro K620"],
	  "vendor": "NVIDIA",
	  "performance": 2341
	}, {
	  "names": ["Quadro K620M", "NVIDIA Quadro K620M"],
	  "vendor": "NVIDIA",
	  "performance": 932
	}, {
	  "names": ["Quadro M1000M", "NVIDIA Quadro M1000M"],
	  "vendor": "NVIDIA",
	  "performance": 2438
	}, {
	  "names": ["Quadro M1200", "Quadro M1200 Mobile", "NVIDIA Quadro M1200"],
	  "vendor": "NVIDIA",
	  "performance": 3113
	}, {
	  "names": ["Quadro M2000"],
	  "vendor": "NVIDIA",
	  "performance": 4282
	}, {
	  "names": ["Quadro M2000M", "NVIDIA Quadro M2000M"],
	  "vendor": "NVIDIA",
	  "performance": 2987
	}, {
	  "names": ["Quadro M2200", "Quadro M2200 Mobile", "NVIDIA Quadro M2200"],
	  "vendor": "NVIDIA",
	  "performance": 3782
	}, {
	  "names": ["Quadro M3000M", "NVIDIA Quadro M3000M"],
	  "vendor": "NVIDIA",
	  "performance": 4571
	}, {
	  "names": ["Quadro M4000"],
	  "vendor": "NVIDIA",
	  "performance": 6676
	}, {
	  "names": ["Quadro M4000M", "NVIDIA Quadro M4000M"],
	  "vendor": "NVIDIA",
	  "performance": 5008
	}, {
	  "names": ["Quadro M5000"],
	  "vendor": "NVIDIA",
	  "performance": 8548
	}, {
	  "names": ["Quadro M5000M", "NVIDIA Quadro M5000M"],
	  "vendor": "NVIDIA",
	  "performance": 5796
	}, {
	  "names": ["Quadro M500M", "NVIDIA Quadro M500M"],
	  "vendor": "NVIDIA",
	  "performance": 1096
	}, {
	  "names": ["Quadro M520", "Quadro M520 Mobile", "NVIDIA Quadro M520"],
	  "vendor": "NVIDIA",
	  "performance": 1632
	}, {
	  "names": ["Quadro M5500", "Quadro M5500 Mobile", "NVIDIA Quadro M5500"],
	  "vendor": "NVIDIA",
	  "performance": 7915
	}, {
	  "names": ["Quadro M6000"],
	  "vendor": "NVIDIA",
	  "performance": 9582
	}, {
	  "names": ["Quadro M600M", "NVIDIA Quadro M600M"],
	  "vendor": "NVIDIA",
	  "performance": 1932
	}, {
	  "names": ["Quadro M620", "Quadro M620 Mobile", "NVIDIA Quadro M620"],
	  "vendor": "NVIDIA",
	  "performance": 2800
	}, {
	  "names": ["Quadro P1000", "NVIDIA Quadro P1000"],
	  "vendor": "NVIDIA",
	  "performance": 4413
	}, {
	  "names": ["Quadro P2000", "NVIDIA Quadro P2000"],
	  "vendor": "NVIDIA",
	  "performance": 7179
	}, {
	  "names": ["Quadro P2000 with Max-Q Design", "NVIDIA Quadro P2000 Max-Q"],
	  "performance": 5392
	}, {
	  "names": ["Quadro P3000", "Quadro P3000 Mobile", "NVIDIA Quadro P3000"],
	  "vendor": "NVIDIA",
	  "performance": 5953
	}, {
	  "names": ["Quadro P3200", "Quadro P3200 Mobile", "NVIDIA Quadro P3200"],
	  "vendor": "NVIDIA",
	  "performance": 7968
	}, {
	  "names": ["Quadro P3200 with Max-Q Design", "Quadro P3200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 8656
	}, {
	  "names": ["Quadro P400"],
	  "vendor": "NVIDIA",
	  "performance": 1715
	}, {
	  "names": ["Quadro P4000", "NVIDIA Quadro P4000"],
	  "vendor": "NVIDIA",
	  "performance": 10425
	}, {
	  "names": ["Quadro P4000 with Max-Q Design", "Quadro P4000 Max-Q", "NVIDIA Quadro P4000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9082
	}, {
	  "names": ["Quadro P4200", "Quadro P4200 Mobile", "NVIDIA Quadro P4200"],
	  "vendor": "NVIDIA",
	  "performance": 10373
	}, {
	  "names": ["Quadro P500", "Quadro P500 Mobile", "NVIDIA Quadro P500"],
	  "vendor": "NVIDIA",
	  "performance": 1723
	}, {
	  "names": ["Quadro P5000", "NVIDIA Quadro P5000"],
	  "vendor": "NVIDIA",
	  "performance": 10039
	}, {
	  "names": ["Quadro P5200", "Quadro P5200 Mobile", "NVIDIA Quadro P5200"],
	  "vendor": "NVIDIA",
	  "performance": 9185
	}, {
	  "names": ["Quadro P5200 with Max-Q Design", "Quadro P5200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9796
	}, {
	  "names": ["Quadro P600", "NVIDIA Quadro P600"],
	  "vendor": "NVIDIA",
	  "performance": 3223
	}, {
	  "names": ["Quadro P6000"],
	  "vendor": "NVIDIA",
	  "performance": 13202
	}, {
	  "names": ["Quadro P620"],
	  "vendor": "NVIDIA",
	  "performance": 3888
	}, {
	  "names": ["Quadro RTX 4000"],
	  "vendor": "NVIDIA",
	  "performance": 13152
	}, {
	  "names": ["Quadro RTX 5000"],
	  "vendor": "NVIDIA",
	  "performance": 13182
	}, {
	  "names": ["Quadro RTX 6000"],
	  "vendor": "NVIDIA",
	  "performance": 14837
	}, {
	  "names": ["Quadro RTX 8000"],
	  "vendor": "NVIDIA",
	  "performance": 13545
	}, {
	  "names": ["Radeon 520", "Radeon 520 Mobile", "AMD Radeon 520"],
	  "vendor": "AMD",
	  "performance": 821
	}, {
	  "names": ["Radeon 530", "Radeon 530 Mobile", "AMD Radeon 530"],
	  "vendor": "AMD",
	  "performance": 1069
	}, {
	  "names": ["Radeon 535", "Radeon 535 Mobile"],
	  "vendor": "AMD",
	  "performance": 1201
	}, {
	  "names": ["Radeon 540", "Radeon RX 540 Mobile", "AMD Radeon RX 540"],
	  "vendor": "AMD",
	  "performance": 1568
	}, {
	  "names": ["Radeon 540X", "Radeon 540X Mobile"],
	  "vendor": "AMD",
	  "performance": 1560
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
	  "performance": 221
	}, {
	  "names": ["Radeon HD 6250", "AMD Radeon HD 6250"],
	  "vendor": "AMD",
	  "performance": 119
	}, {
	  "names": ["Radeon HD 6290", "AMD Radeon HD 6290"],
	  "vendor": "AMD",
	  "performance": 138
	}, {
	  "names": ["Radeon HD 6320", "Radeon HD 6320 IGP", "AMD Radeon HD 6320"],
	  "vendor": "AMD",
	  "performance": 202
	}, {
	  "names": ["RADEON HD 6350", "Radeon HD 6350"],
	  "vendor": "AMD",
	  "performance": 209
	}, {
	  "names": ["Radeon HD 6370D", "Radeon HD 6370D IGP"],
	  "vendor": "AMD",
	  "performance": 310
	}, {
	  "names": ["Radeon HD 6380G", "Radeon HD 6380G IGP", "AMD Radeon HD 6380G"],
	  "vendor": "AMD",
	  "performance": 300
	}, {
	  "names": ["Radeon HD 6410D", "Radeon HD 6410D IGP"],
	  "vendor": "AMD",
	  "performance": 385
	}, {
	  "names": ["Radeon HD 6430M", "AMD Radeon HD 6430M"],
	  "vendor": "AMD",
	  "performance": 192
	}, {
	  "names": ["Radeon HD 6450", "AMD Radeon HD 6450 GDDR5"],
	  "vendor": "AMD",
	  "performance": 276
	}, {
	  "names": ["Radeon HD 6450A"],
	  "vendor": "AMD",
	  "performance": 260
	}, {
	  "names": ["Radeon HD 6470M", "AMD Radeon HD 6470M"],
	  "vendor": "AMD",
	  "performance": 312
	}, {
	  "names": ["Radeon HD 6480G", "Radeon HD 6480G IGP", "AMD Radeon HD 6480G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 406
	}, {
	  "names": ["Radeon HD 6490M", "AMD Radeon HD 6490M"],
	  "vendor": "AMD",
	  "performance": 377
	}, {
	  "names": ["Radeon HD 6520G", "Radeon HD 6520G IGP", "AMD Radeon HD 6520G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 486
	}, {
	  "names": ["Radeon HD 6530D", "Radeon HD 6530D IGP"],
	  "vendor": "AMD",
	  "performance": 513
	}, {
	  "names": ["Radeon HD 6550A"],
	  "vendor": "AMD",
	  "performance": 707
	}, {
	  "names": ["Radeon HD 6550D", "Radeon HD 6550D IGP", "AMD Radeon HD 6550D"],
	  "vendor": "AMD",
	  "performance": 640
	}, {
	  "names": ["Radeon HD 6570"],
	  "vendor": "AMD",
	  "performance": 760
	}, {
	  "names": ["Radeon HD 6610M"],
	  "vendor": "AMD",
	  "performance": 565
	}, {
	  "names": ["Radeon HD 6620G", "Radeon HD 6620G IGP", "AMD Radeon HD 6620G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 557
	}, {
	  "names": ["Radeon HD 6630M", "AMD Radeon HD 6630M"],
	  "vendor": "AMD",
	  "performance": 684
	}, {
	  "names": ["Radeon HD 6650M", "AMD Radeon HD 6650M"],
	  "vendor": "AMD",
	  "performance": 916
	}, {
	  "names": ["Radeon HD 6670"],
	  "vendor": "AMD",
	  "performance": 1062
	}, {
	  "names": ["Radeon HD 6750"],
	  "vendor": "AMD",
	  "performance": 1318
	}, {
	  "names": ["Radeon HD 6750M", "AMD Radeon HD 6750M"],
	  "vendor": "AMD",
	  "performance": 937
	}, {
	  "names": ["Radeon HD 6770"],
	  "vendor": "AMD",
	  "performance": 1685
	}, {
	  "names": ["Radeon HD 6770M", "AMD Radeon HD 6770M"],
	  "vendor": "AMD",
	  "performance": 964
	}, {
	  "names": ["Radeon HD 6790", "AMD Radeon HD 6790"],
	  "vendor": "AMD",
	  "performance": 2048
	}, {
	  "names": ["Radeon HD 6970M", "AMD Radeon HD 6970M"],
	  "vendor": "AMD",
	  "performance": 2270
	}, {
	  "names": ["Radeon HD 6990"],
	  "vendor": "AMD",
	  "performance": 2932
	}, {
	  "names": ["Radeon HD 7290", "Radeon HD 7290 IGP", "AMD Radeon HD 7290"],
	  "vendor": "AMD",
	  "performance": 140
	}, {
	  "names": ["Radeon HD 7310", "Radeon HD 7310 IGP", "AMD Radeon HD 7310"],
	  "vendor": "AMD",
	  "performance": 171
	}, {
	  "names": ["Radeon HD 7340", "Radeon HD 7340 IGP", "AMD Radeon HD 7340"],
	  "vendor": "AMD",
	  "performance": 207
	}, {
	  "names": ["Radeon HD 7350", "Radeon HD 7350 OEM"],
	  "vendor": "AMD",
	  "performance": 278
	}, {
	  "names": ["Radeon HD 7400G", "Radeon HD 7400G IGP", "AMD Radeon HD 7400G"],
	  "vendor": "AMD",
	  "performance": 322
	}, {
	  "names": ["Radeon HD 7420G", "Radeon HD 7420G IGP", "AMD Radeon HD 7420G"],
	  "vendor": "AMD",
	  "performance": 429
	}, {
	  "names": ["Radeon HD 7450", "Radeon HD 7450 OEM"],
	  "vendor": "AMD",
	  "performance": 307
	}, {
	  "names": ["Radeon HD 7450A"],
	  "vendor": "AMD",
	  "performance": 288
	}, {
	  "names": ["Radeon HD 7450M", "AMD Radeon HD 6620G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 329
	}, {
	  "names": ["Radeon HD 7470", "Radeon HD 7470 OEM"],
	  "vendor": "AMD",
	  "performance": 361
	}, {
	  "names": ["Radeon HD 7470M", "AMD Radeon HD 7470M"],
	  "vendor": "AMD",
	  "performance": 407
	}, {
	  "names": ["Radeon HD 7480D", "Radeon HD 7480D IGP", "AMD Radeon HD 7480D"],
	  "vendor": "AMD",
	  "performance": 430
	}, {
	  "names": ["Radeon HD 7500G", "Radeon HD 7500G IGP", "AMD Radeon HD 7500G + HD 7550M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 412
	}, {
	  "names": ["Radeon HD 7520G", "Radeon HD 7520G IGP", "AMD Radeon HD 7520G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 453
	}, {
	  "names": ["Radeon HD 7540D", "Radeon HD 7540D IGP"],
	  "vendor": "AMD",
	  "performance": 515
	}, {
	  "names": ["Radeon HD 7550M", "AMD Radeon HD 7550M"],
	  "vendor": "AMD",
	  "performance": 464
	}, {
	  "names": ["Radeon HD 7560D", "Radeon HD 7560D IGP", "AMD Radeon HD 7560D"],
	  "vendor": "AMD",
	  "performance": 663
	}, {
	  "names": ["Radeon HD 7570"],
	  "vendor": "AMD",
	  "performance": 980
	}, {
	  "names": ["Radeon HD 7570M", "AMD Radeon HD 7570M"],
	  "vendor": "AMD",
	  "performance": 612
	}, {
	  "names": ["Radeon HD 7600G", "Radeon HD 7600G IGP", "AMD Radeon HD 7600G"],
	  "vendor": "AMD",
	  "performance": 481
	}, {
	  "names": ["Radeon HD 7610M", "AMD Radeon HD 7640G + HD 7610M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 632
	}, {
	  "names": ["Radeon HD 7620G", "Radeon HD 7620G IGP", "AMD Radeon HD 7620G"],
	  "vendor": "AMD",
	  "performance": 474
	}, {
	  "names": ["Radeon HD 7640G", "Radeon HD 7640G IGP", "AMD Radeon HD 7640G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 615
	}, {
	  "names": ["Radeon HD 7650A"],
	  "vendor": "AMD",
	  "performance": 792
	}, {
	  "names": ["Radeon HD 7650M", "AMD Radeon HD 7650M"],
	  "vendor": "AMD",
	  "performance": 724
	}, {
	  "names": ["Radeon HD 7660D", "Radeon HD 7660D IGP", "AMD Radeon HD 7660D"],
	  "vendor": "AMD",
	  "performance": 776
	}, {
	  "names": ["Radeon HD 7660G", "Radeon HD 7660G IGP", "AMD Radeon HD 7660G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 797
	}, {
	  "names": ["Radeon HD 7670", "Radeon HD 7670 OEM"],
	  "vendor": "AMD",
	  "performance": 1124
	}, {
	  "names": ["Radeon HD 7670A"],
	  "vendor": "AMD",
	  "performance": 1050
	}, {
	  "names": ["Radeon HD 7670M", "AMD Radeon HD 7670M"],
	  "vendor": "AMD",
	  "performance": 811
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
	  "performance": 1427
	}, {
	  "names": ["Radeon HD 7730M", "AMD Radeon HD 7730M"],
	  "vendor": "AMD",
	  "performance": 1000
	}, {
	  "names": ["Radeon HD 7750"],
	  "vendor": "AMD",
	  "performance": 1713
	}, {
	  "names": ["Radeon HD 7750M", "AMD Radeon HD 7750M"],
	  "vendor": "AMD",
	  "performance": 1191
	}, {
	  "names": ["Radeon HD 7770", "Radeon HD 7770 GHz Edition", "AMD Radeon HD 7770"],
	  "vendor": "AMD",
	  "performance": 2226
	}, {
	  "names": ["Radeon HD 7790"],
	  "vendor": "AMD",
	  "performance": 3087
	}, {
	  "names": ["Radeon HD 7850"],
	  "vendor": "AMD",
	  "performance": 3849
	}, {
	  "names": ["Radeon HD 7850M", "AMD Radeon HD 7850M"],
	  "vendor": "AMD",
	  "performance": 1372
	}, {
	  "names": ["Radeon HD 7870", "Radeon HD 7870 XT", "AMD Radeon HD 7870"],
	  "vendor": "AMD",
	  "performance": 4385
	}, {
	  "names": ["Radeon HD 7870M", "AMD Radeon HD 7870M"],
	  "vendor": "AMD",
	  "performance": 1507
	}, {
	  "names": ["Radeon HD 7950", "R9 280", "Radeon HD 7950"],
	  "vendor": "AMD",
	  "performance": 4764
	}, {
	  "names": ["Radeon HD 7970", "R9 280X", "Radeon HD 7970"],
	  "vendor": "AMD",
	  "performance": 5247
	}, {
	  "names": ["Radeon HD 7970M", "AMD Radeon HD 7970M"],
	  "vendor": "AMD",
	  "performance": 3795
	}, {
	  "names": ["Radeon HD 7990"],
	  "vendor": "AMD",
	  "performance": 5565
	}, {
	  "names": ["Radeon HD 8180", "Radeon HD 8180 IGP", "AMD Radeon HD 8180"],
	  "vendor": "AMD",
	  "performance": 195
	}, {
	  "names": ["Radeon HD 8210", "Radeon HD 8210 IGP", "AMD Radeon HD 8210"],
	  "vendor": "AMD",
	  "performance": 250
	}, {
	  "names": ["Radeon HD 8240", "Radeon HD 8240 IGP", "AMD Radeon HD 8240"],
	  "vendor": "AMD",
	  "performance": 278
	}, {
	  "names": ["Radeon HD 8250", "Radeon HD 8250 IGP", "AMD Radeon HD 8250"],
	  "vendor": "AMD",
	  "performance": 257
	}, {
	  "names": ["Radeon HD 8280", "Radeon HD 8280 IGP", "AMD Radeon HD 8280"],
	  "vendor": "AMD",
	  "performance": 319
	}, {
	  "names": ["Radeon HD 8280E"],
	  "vendor": "AMD",
	  "performance": 314
	}, {
	  "names": ["Radeon HD 8330", "Radeon HD 8330 IGP", "AMD Radeon HD 8330"],
	  "vendor": "AMD",
	  "performance": 332
	}, {
	  "names": ["Radeon HD 8330E"],
	  "vendor": "AMD",
	  "performance": 316
	}, {
	  "names": ["Radeon HD 8350", "Radeon HD 8350 OEM"],
	  "vendor": "AMD",
	  "performance": 265
	}, {
	  "names": ["Radeon HD 8350G", "Radeon HD 8350G IGP", "AMD Radeon HD 8350G"],
	  "vendor": "AMD",
	  "performance": 443
	}, {
	  "names": ["Radeon HD 8370D", "Radeon HD 8370D IGP"],
	  "vendor": "AMD",
	  "performance": 433
	}, {
	  "names": ["Radeon HD 8400", "Radeon HD 8400 IGP", "AMD Radeon HD 8400"],
	  "vendor": "AMD",
	  "performance": 354
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
	  "performance": 416
	}, {
	  "names": ["Radeon HD 8470", "Radeon HD 8470 OEM"],
	  "vendor": "AMD",
	  "performance": 341
	}, {
	  "names": ["Radeon HD 8470D", "Radeon HD 8470D IGP", "AMD Radeon HD 8470D"],
	  "vendor": "AMD",
	  "performance": 521
	}, {
	  "names": ["Radeon HD 8490", "Radeon HD 8490 OEM"],
	  "vendor": "AMD",
	  "performance": 376
	}, {
	  "names": ["Radeon HD 8510G", "Radeon HD 8510G IGP", "AMD Radeon HD 8510G"],
	  "vendor": "AMD",
	  "performance": 497
	}, {
	  "names": ["Radeon HD 8550D", "Radeon HD 8550D IGP"],
	  "vendor": "AMD",
	  "performance": 685
	}, {
	  "names": ["Radeon HD 8550G", "Radeon HD 8550G IGP", "AMD Radeon HD 8550G + HD 8750M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 719
	}, {
	  "names": ["Radeon HD 8550G + 8500M Dual", "AMD Radeon HD 8550G + HD 8670M Dual Graphics"],
	  "performance": 602
	}, {
	  "names": ["Radeon HD 8570", "Radeon HD 8570 OEM"],
	  "vendor": "AMD",
	  "performance": 993
	}, {
	  "names": ["Radeon HD 8570D", "Radeon HD 8570D IGP", "AMD Radeon HD 8570D"],
	  "vendor": "AMD",
	  "performance": 679
	}, {
	  "names": ["Radeon HD 8570M", "AMD Radeon HD 8650G + HD 8570M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 531
	}, {
	  "names": ["Radeon HD 8610G", "Radeon HD 8610G IGP", "AMD Radeon HD 8610G"],
	  "vendor": "AMD",
	  "performance": 552
	}, {
	  "names": ["Radeon HD 8650D", "Radeon HD 8650D IGP"],
	  "vendor": "AMD",
	  "performance": 525
	}, {
	  "names": ["Radeon HD 8650G", "Radeon HD 8650G IGP", "AMD Radeon HD 8650G + HD 8670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 910
	}, {
	  "names": ["Radeon HD 8670D", "Radeon HD 8670D IGP", "AMD Radeon HD 8670D"],
	  "vendor": "AMD",
	  "performance": 780
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
	  "performance": 1037
	}, {
	  "names": ["Radeon HD 8750M", "AMD Radeon HD 8750M"],
	  "vendor": "AMD",
	  "performance": 1068
	}, {
	  "names": ["Radeon HD 8790M", "AMD Radeon HD 8790M"],
	  "vendor": "AMD",
	  "performance": 1305
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
	  "performance": 2990
	}, {
	  "names": ["Radeon HD 8970M", "AMD Radeon HD 8970M"],
	  "vendor": "AMD",
	  "performance": 3876
	}, {
	  "names": ["Radeon HD 8990", "Radeon HD 8990 OEM"],
	  "vendor": "AMD",
	  "performance": 5216
	}, {
	  "names": ["Radeon Pro 450", "AMD Radeon Pro 450"],
	  "vendor": "AMD",
	  "performance": 2722
	}, {
	  "names": ["Radeon Pro 455", "AMD Radeon Pro 455"],
	  "vendor": "AMD",
	  "performance": 3112
	}, {
	  "names": ["Radeon Pro 460", "AMD Radeon Pro 460"],
	  "vendor": "AMD",
	  "performance": 3452
	}, {
	  "names": ["Radeon Pro 555", "AMD Radeon Pro 555"],
	  "vendor": "AMD",
	  "performance": 3140
	}, {
	  "names": ["Radeon Pro 560", "AMD Radeon Pro 560"],
	  "vendor": "AMD",
	  "performance": 3475
	}, {
	  "names": ["Radeon Pro 560X", "AMD Radeon Pro 560X"],
	  "vendor": "AMD",
	  "performance": 3677
	}, {
	  "names": ["Radeon Pro 570"],
	  "vendor": "AMD",
	  "performance": 6336
	}, {
	  "names": ["Radeon Pro 580"],
	  "vendor": "AMD",
	  "performance": 7753
	}, {
	  "names": ["Radeon Pro Duo"],
	  "vendor": "AMD",
	  "performance": 9436
	}, {
	  "names": ["Radeon Pro SSG"],
	  "vendor": "AMD",
	  "performance": 10497
	}, {
	  "names": ["Radeon Pro Vega 20", "AMD Radeon Pro Vega 20"],
	  "vendor": "AMD",
	  "performance": 6318
	}, {
	  "names": ["Radeon Pro Vega 56", "AMD Radeon Pro Vega 56"],
	  "vendor": "AMD",
	  "performance": 11915
	}, {
	  "names": ["Radeon Pro Vega 64"],
	  "vendor": "AMD",
	  "performance": 11455
	}, {
	  "names": ["Radeon Pro WX 2100"],
	  "vendor": "AMD",
	  "performance": 2289
	}, {
	  "names": ["Radeon Pro WX 3100", "AMD Radeon Pro WX 3100 Mobile"],
	  "vendor": "AMD",
	  "performance": 3306
	}, {
	  "names": ["Radeon Pro WX 4100"],
	  "vendor": "AMD",
	  "performance": 4092
	}, {
	  "names": ["Radeon Pro WX 4130", "Radeon Pro WX 4130 Mobile", "AMD Radeon Pro WX 4130"],
	  "vendor": "AMD",
	  "performance": 2984
	}, {
	  "names": ["Radeon Pro WX 4150", "Radeon Pro WX 4150 Mobile", "AMD Radeon Pro WX 4150"],
	  "vendor": "AMD",
	  "performance": 3151
	}, {
	  "names": ["Radeon Pro WX 5100"],
	  "vendor": "AMD",
	  "performance": 5640
	}, {
	  "names": ["Radeon Pro WX 7100", "AMD Radeon Pro WX 7100"],
	  "vendor": "AMD",
	  "performance": 7886
	}, {
	  "names": ["Radeon PRO WX 8200", "Radeon Pro WX 8200"],
	  "vendor": "AMD",
	  "performance": 11583
	}, {
	  "names": ["Radeon Pro WX 9100"],
	  "vendor": "AMD",
	  "performance": 10895
	}, {
	  "names": ["Radeon R2", "Radeon R2 Graphics", "AMD Radeon R2 (Stoney Ridge)"],
	  "vendor": "AMD",
	  "performance": 300
	}, {
	  "names": ["Radeon R3", "Radeon R3 Graphics", "AMD Radeon R3 (Mullins", "Beema)"],
	  "vendor": "AMD",
	  "performance": 371
	}, {
	  "names": ["Radeon R4", "Radeon R4 Graphics", "AMD Radeon R4 (Beema)"],
	  "vendor": "AMD",
	  "performance": 399
	}, {
	  "names": ["Radeon R5 220", "Radeon R5 220 OEM"],
	  "vendor": "AMD",
	  "performance": 233
	}, {
	  "names": ["Radeon R5 230"],
	  "vendor": "AMD",
	  "performance": 242
	}, {
	  "names": ["Radeon R5 235", "Radeon R5 235 OEM"],
	  "vendor": "AMD",
	  "performance": 368
	}, {
	  "names": ["Radeon R5 235X", "Radeon R5 235X OEM"],
	  "vendor": "AMD",
	  "performance": 367
	}, {
	  "names": ["Radeon R5 240", "Radeon R5 240 OEM"],
	  "vendor": "AMD",
	  "performance": 650
	}, {
	  "names": ["Radeon R5 310", "Radeon R5 310 OEM"],
	  "vendor": "AMD",
	  "performance": 331
	}, {
	  "names": ["Radeon R5 330", "Radeon R5 330 OEM"],
	  "vendor": "AMD",
	  "performance": 557
	}, {
	  "names": ["Radeon R5 340", "Radeon R5 340 OEM"],
	  "vendor": "AMD",
	  "performance": 1054
	}, {
	  "names": ["Radeon R5 430", "Radeon R5 430 OEM"],
	  "vendor": "AMD",
	  "performance": 1015
	}, {
	  "names": ["Radeon R5 M230", "AMD Radeon R5 M230"],
	  "vendor": "AMD",
	  "performance": 563
	}, {
	  "names": ["Radeon R5 M240", "AMD Radeon R5 M240"],
	  "vendor": "AMD",
	  "performance": 556
	}, {
	  "names": ["Radeon R5 M255", "AMD Radeon R5 M255"],
	  "vendor": "AMD",
	  "performance": 764
	}, {
	  "names": ["Radeon R5 M315", "AMD Radeon R5 M315"],
	  "vendor": "AMD",
	  "performance": 609
	}, {
	  "names": ["Radeon R5 M320", "AMD Radeon R5 M320"],
	  "vendor": "AMD",
	  "performance": 520
	}, {
	  "names": ["Radeon R5 M330", "AMD Radeon R5 M330"],
	  "vendor": "AMD",
	  "performance": 595
	}, {
	  "names": ["Radeon R5 M335", "AMD Radeon R5 M335"],
	  "vendor": "AMD",
	  "performance": 548
	}, {
	  "names": ["Radeon R5 M420", "AMD Radeon R5 M420"],
	  "vendor": "AMD",
	  "performance": 546
	}, {
	  "names": ["Radeon R5 M430", "AMD Radeon R5 M430"],
	  "vendor": "AMD",
	  "performance": 648
	}, {
	  "names": ["Radeon R5 M435"],
	  "vendor": "AMD",
	  "performance": 734
	}, {
	  "names": ["Radeon R6", "Radeon R6 Graphics", "AMD Radeon R6 (Carrizo)"],
	  "vendor": "AMD",
	  "performance": 643
	}, {
	  "names": ["Radeon R6 + R7 M265DX Dual", "Radeon R7 M265DX"],
	  "vendor": "AMD",
	  "performance": 570
	}, {
	  "names": ["Radeon R6 M255DX", "AMD Radeon R6 M255DX"],
	  "vendor": "AMD",
	  "performance": 597
	}, {
	  "names": ["Radeon R7 + R7 240 Dual", "Radeon R7 240"],
	  "vendor": "AMD",
	  "performance": 1045
	}, {
	  "names": ["Radeon R7 + R7 350 Dual", "Radeon R7 350"],
	  "vendor": "AMD",
	  "performance": 1982
	}, {
	  "names": ["Radeon R7 240", "Radeon R7 240 OEM"],
	  "vendor": "AMD",
	  "performance": 974
	}, {
	  "names": ["Radeon R7 250", "AMD Radeon R7 250"],
	  "vendor": "AMD",
	  "performance": 1403
	}, {
	  "names": ["Radeon R7 250X"],
	  "vendor": "AMD",
	  "performance": 2268
	}, {
	  "names": ["Radeon R7 260"],
	  "vendor": "AMD",
	  "performance": 2891
	}, {
	  "names": ["Radeon R7 260X"],
	  "vendor": "AMD",
	  "performance": 3184
	}, {
	  "names": ["Radeon R7 340", "Radeon R7 340 OEM"],
	  "vendor": "AMD",
	  "performance": 1047
	}, {
	  "names": ["Radeon R7 360"],
	  "vendor": "AMD",
	  "performance": 3320
	}, {
	  "names": ["Radeon R7 370", "AMD Radeon R7 370"],
	  "vendor": "AMD",
	  "performance": 4639
	}, {
	  "names": ["Radeon R7 430", "Radeon R7 430 OEM"],
	  "vendor": "AMD",
	  "performance": 1338
	}, {
	  "names": ["Radeon R7 450", "Radeon R7 450 OEM"],
	  "vendor": "AMD",
	  "performance": 2193
	}, {
	  "names": ["Radeon R7 A265"],
	  "vendor": "AMD",
	  "performance": 954
	}, {
	  "names": ["Radeon R7 M260", "AMD Radeon R7 M260"],
	  "vendor": "AMD",
	  "performance": 661
	}, {
	  "names": ["Radeon R7 M260DX"],
	  "vendor": "AMD",
	  "performance": 750
	}, {
	  "names": ["Radeon R7 M260X", "AMD Radeon R7 M260X"],
	  "vendor": "AMD",
	  "performance": 1115
	}, {
	  "names": ["Radeon R7 M265", "AMD Radeon R7 M265"],
	  "vendor": "AMD",
	  "performance": 813
	}, {
	  "names": ["Radeon R7 M270", "AMD Radeon R7 M270"],
	  "vendor": "AMD",
	  "performance": 768
	}, {
	  "names": ["Radeon R7 M340", "AMD Radeon R7 M340"],
	  "vendor": "AMD",
	  "performance": 796
	}, {
	  "names": ["Radeon R7 M350"],
	  "vendor": "AMD",
	  "performance": 1274
	}, {
	  "names": ["Radeon R7 M360", "AMD Radeon R7 M360"],
	  "vendor": "AMD",
	  "performance": 700
	}, {
	  "names": ["Radeon R7 M365X"],
	  "vendor": "AMD",
	  "performance": 901
	}, {
	  "names": ["Radeon R7 M370", "AMD Radeon R7 M370"],
	  "vendor": "AMD",
	  "performance": 1417
	}, {
	  "names": ["Radeon R7 M440", "AMD Radeon R7 M440"],
	  "vendor": "AMD",
	  "performance": 968
	}, {
	  "names": ["Radeon R7 M445", "AMD Radeon R7 M445"],
	  "vendor": "AMD",
	  "performance": 1040
	}, {
	  "names": ["Radeon R7 M460", "AMD Radeon R7 M460"],
	  "vendor": "AMD",
	  "performance": 1136
	}, {
	  "names": ["Radeon R7 M465", "AMD Radeon R7 M465"],
	  "vendor": "AMD",
	  "performance": 1306
	}, {
	  "names": ["Radeon R7 M465X"],
	  "vendor": "AMD",
	  "performance": 2057
	}, {
	  "names": ["Radeon R8 M365DX", "AMD Radeon R8 M365DX"],
	  "vendor": "AMD",
	  "performance": 740
	}, {
	  "names": ["Radeon R8 M445DX", "AMD Radeon R8 M445DX"],
	  "vendor": "AMD",
	  "performance": 840
	}, {
	  "names": ["Radeon R8 M535DX"],
	  "vendor": "AMD",
	  "performance": 695
	}, {
	  "names": ["Radeon R9 255", "Radeon R9 255 OEM"],
	  "vendor": "AMD",
	  "performance": 1814
	}, {
	  "names": ["Radeon R9 260", "Radeon R9 260 OEM"],
	  "vendor": "AMD",
	  "performance": 3018
	}, {
	  "names": ["Radeon R9 270", "R7 370", "Radeon R9 270"],
	  "vendor": "AMD",
	  "performance": 4259
	}, {
	  "names": ["Radeon R9 270X", "AMD Radeon R9 270X"],
	  "vendor": "AMD",
	  "performance": 4698
	}, {
	  "names": ["Radeon R9 280"],
	  "vendor": "AMD",
	  "performance": 5386
	}, {
	  "names": ["Radeon R9 280X", "AMD Radeon R9 280X"],
	  "vendor": "AMD",
	  "performance": 5850
	}, {
	  "names": ["Radeon R9 285", "380", "Radeon R9 285"],
	  "vendor": "AMD",
	  "performance": 5549
	}, {
	  "names": ["Radeon R9 290", "390", "Radeon R9 290"],
	  "vendor": "AMD",
	  "performance": 7160
	}, {
	  "names": ["Radeon R9 290X", "390X", "Radeon R9 290X"],
	  "vendor": "AMD",
	  "performance": 7458
	}, {
	  "names": ["Radeon R9 295X2"],
	  "vendor": "AMD",
	  "performance": 7789
	}, {
	  "names": ["Radeon R9 360", "Radeon R9 360 OEM"],
	  "vendor": "AMD",
	  "performance": 3031
	}, {
	  "names": ["Radeon R9 370"],
	  "vendor": "AMD",
	  "performance": 4722
	}, {
	  "names": ["Radeon R9 380", "AMD Radeon R9 380"],
	  "vendor": "AMD",
	  "performance": 6169
	}, {
	  "names": ["Radeon R9 380X"],
	  "vendor": "AMD",
	  "performance": 6246
	}, {
	  "names": ["Radeon R9 390"],
	  "vendor": "AMD",
	  "performance": 8121
	}, {
	  "names": ["Radeon R9 390X", "AMD Radeon R9 390X"],
	  "vendor": "AMD",
	  "performance": 8512
	}, {
	  "names": ["Radeon R9 Fury", "Radeon R9 FURY", "AMD Radeon R9 Fury"],
	  "vendor": "AMD",
	  "performance": 9216
	}, {
	  "names": ["Radeon R9 Fury + Fury X", "Radeon R9 FURY X"],
	  "vendor": "AMD",
	  "performance": 8490
	}, {
	  "names": ["Radeon R9 M265X", "AMD Radeon R9 M265X"],
	  "vendor": "AMD",
	  "performance": 1289
	}, {
	  "names": ["Radeon R9 M270X"],
	  "vendor": "AMD",
	  "performance": 1444
	}, {
	  "names": ["Radeon R9 M275", "AMD Radeon R9 M275"],
	  "vendor": "AMD",
	  "performance": 1114
	}, {
	  "names": ["Radeon R9 M275X", "M375", "Radeon R9 M275X"],
	  "vendor": "AMD",
	  "performance": 1525
	}, {
	  "names": ["Radeon R9 M280X", "AMD Radeon R9 M280X"],
	  "vendor": "AMD",
	  "performance": 1349
	}, {
	  "names": ["Radeon R9 M290X", "AMD Radeon R9 M290X"],
	  "vendor": "AMD",
	  "performance": 4060
	}, {
	  "names": ["Radeon R9 M295X", "AMD Radeon R9 M295X"],
	  "vendor": "AMD",
	  "performance": 5150
	}, {
	  "names": ["Radeon R9 M360"],
	  "vendor": "AMD",
	  "performance": 2042
	}, {
	  "names": ["Radeon R9 M370X", "Radeon R9 M370X Mac Edition", "AMD Radeon R9 M370X"],
	  "vendor": "AMD",
	  "performance": 1931
	}, {
	  "names": ["Radeon R9 M375", "AMD Radeon R9 M375"],
	  "vendor": "AMD",
	  "performance": 1219
	}, {
	  "names": ["Radeon R9 M375X"],
	  "vendor": "AMD",
	  "performance": 2131
	}, {
	  "names": ["Radeon R9 M380", "AMD Radeon R9 M380"],
	  "vendor": "AMD",
	  "performance": 3050
	}, {
	  "names": ["Radeon R9 M385X", "AMD Radeon R9 M385X"],
	  "vendor": "AMD",
	  "performance": 885
	}, {
	  "names": ["Radeon R9 M390X", "AMD Radeon R9 M390X"],
	  "vendor": "AMD",
	  "performance": 4356
	}, {
	  "names": ["Radeon R9 M395", "Radeon R9 M395 Mac Edition", "AMD Radeon R9 M395"],
	  "vendor": "AMD",
	  "performance": 5104
	}, {
	  "names": ["Radeon R9 M395X", "AMD Radeon R9 M395X"],
	  "vendor": "AMD",
	  "performance": 5782
	}, {
	  "names": ["Radeon R9 M470", "AMD Radeon R9 M470"],
	  "vendor": "AMD",
	  "performance": 2435
	}, {
	  "names": ["Radeon R9 M470X", "AMD Radeon R9 M470X"],
	  "vendor": "AMD",
	  "performance": 3563
	}, {
	  "names": ["Radeon RX 460", "AMD Radeon RX 460 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 4331
	}, {
	  "names": ["Radeon RX 470", "AMD Radeon RX 470 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 7824
	}, {
	  "names": ["Radeon RX 480", "AMD Radeon RX 480 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8156
	}, {
	  "names": ["Radeon RX 550", "AMD Radeon RX 550 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 3413
	}, {
	  "names": ["Radeon RX 550X", "AMD Radeon RX 550X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 1708
	}, {
	  "names": ["Radeon RX 560", "AMD Radeon RX 560 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 4285
	}, {
	  "names": ["Radeon RX 560X", "AMD Radeon RX 560X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 3520
	}, {
	  "names": ["Radeon RX 570", "AMD Radeon RX 570 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 6967
	}, {
	  "names": ["Radeon RX 580", "AMD Radeon RX 580 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8610
	}, {
	  "names": ["Radeon RX 580 2048SP"],
	  "vendor": "AMD",
	  "performance": 8169
	}, {
	  "names": ["Radeon RX 590", "AMD Radeon RX 590 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 9457
	}, {
	  "names": ["Radeon RX Vega 10", "Radeon RX Vega 10 Mobile", "AMD Radeon RX Vega 10"],
	  "vendor": "AMD",
	  "performance": 1720
	}, {
	  "names": ["Radeon RX Vega 11", "AMD Radeon RX Vega 11"],
	  "vendor": "AMD",
	  "performance": 2277
	}, {
	  "names": ["Radeon RX Vega 56"],
	  "vendor": "AMD",
	  "performance": 12057
	}, {
	  "names": ["Radeon RX Vega 64", "AMD Radeon RX Vega 64"],
	  "vendor": "AMD",
	  "performance": 12300
	}, {
	  "names": ["Radeon RX Vega 8", "Radeon Vega 8", "AMD Radeon RX Vega 8"],
	  "vendor": "AMD",
	  "performance": 1745
	}, {
	  "names": ["Radeon RX Vega M GH", "AMD Radeon RX Vega M GH"],
	  "vendor": "AMD",
	  "performance": 7057
	}, {
	  "names": ["Radeon RX Vega M GL", "AMD Radeon Pro WX Vega M GL"],
	  "vendor": "AMD",
	  "performance": 5154
	}, {
	  "names": ["Radeon Sky 500"],
	  "vendor": "AMD",
	  "performance": 4889
	}, {
	  "names": ["Radeon Vega 11", "Radeon Vega 11 Embedded"],
	  "vendor": "AMD",
	  "performance": 1724
	}, {
	  "names": ["Radeon Vega 3", "Radeon Vega 3 Embedded", "AMD Radeon RX Vega 3"],
	  "vendor": "AMD",
	  "performance": 1073
	}, {
	  "names": ["Radeon Vega 3 Mobile"],
	  "vendor": "AMD",
	  "performance": 1108
	}, {
	  "names": ["Radeon Vega 6", "Radeon Vega 6 Mobile", "AMD Radeon RX Vega 6"],
	  "vendor": "AMD",
	  "performance": 1553
	}, {
	  "names": ["Radeon Vega 8", "Radeon Vega 8 Embedded"],
	  "vendor": "AMD",
	  "performance": 1735
	}, {
	  "names": ["Radeon Vega Frontier Edition"],
	  "vendor": "AMD",
	  "performance": 11137
	}, {
	  "names": ["Radeon VII"],
	  "vendor": "AMD",
	  "performance": 14356
	}, {
	  "names": ["Tesla C2050"],
	  "vendor": "NVIDIA",
	  "performance": 3515
	}, {
	  "names": ["Tesla C2070"],
	  "vendor": "NVIDIA",
	  "performance": 3274
	}, {
	  "names": ["Tesla C2075"],
	  "vendor": "NVIDIA",
	  "performance": 3364
	}, {
	  "names": ["Tesla M60"],
	  "vendor": "NVIDIA",
	  "performance": 7323
	}, {
	  "names": ["TITAN RTX", "NVIDIA Titan RTX"],
	  "vendor": "NVIDIA",
	  "performance": 16141
	}, {
	  "names": ["TITAN V"],
	  "vendor": "NVIDIA",
	  "performance": 14452
	}, {
	  "names": ["TITAN V CEO Edition"],
	  "vendor": "NVIDIA",
	  "performance": 16987
	}, {
	  "names": ["Radeon R9 Nano", "AMD Radeon R9 Nano"],
	  "vendor": "AMD",
	  "performance": 8698
	}, {
	  "names": ["Radeon HD 6450M", "AMD Radeon HD 6450M"],
	  "vendor": "AMD",
	  "performance": 467
	}, {
	  "names": ["Radeon HD 6730M", "AMD Radeon HD 6730M"],
	  "vendor": "AMD",
	  "performance": 911
	}, {
	  "names": ["Radeon HD 6850M", "AMD Radeon HD 6850M"],
	  "vendor": "AMD",
	  "performance": 1041
	}, {
	  "names": ["Radeon HD 6870M", "AMD Radeon HD 6870M"],
	  "vendor": "AMD",
	  "performance": 1544
	}, {
	  "names": ["Radeon HD 6950M", "AMD Radeon HD 6950M"],
	  "vendor": "AMD",
	  "performance": 1603
	}, {
	  "names": ["Radeon HD 6990M", "AMD Radeon HD 6990M"],
	  "vendor": "AMD",
	  "performance": 2059
	}, {
	  "names": ["Radeon HD 7770M", "AMD Radeon HD 7770M"],
	  "vendor": "AMD",
	  "performance": 1466
	}, {
	  "names": ["Radeon HD 8550M", "AMD Radeon HD 8550M"],
	  "vendor": "AMD",
	  "performance": 668
	}, {
	  "names": ["Radeon HD 8770M", "AMD Radeon HD 8770M"],
	  "vendor": "AMD",
	  "performance": 1377
	}, {
	  "names": ["FirePro M8900", "AMD FirePro M8900"],
	  "vendor": "AMD",
	  "performance": 1792
	}, {
	  "names": ["Radeon R6 M340DX", "AMD Radeon R6 M340DX"],
	  "vendor": "AMD",
	  "performance": 1077
	}, {
	  "names": ["HD Graphics", "Intel HD Graphics (Broadwell)"],
	  "vendor": "Intel",
	  "performance": 518
	}, {
	  "names": ["HD Graphics 2000", "Intel HD Graphics 2000"],
	  "vendor": "Intel",
	  "performance": 270
	}, {
	  "names": ["HD Graphics 2500", "Intel HD Graphics 2500"],
	  "vendor": "Intel",
	  "performance": 390
	}, {
	  "names": ["HD Graphics 400", "Intel HD Graphics 400 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 311
	}, {
	  "names": ["HD Graphics 405", "Intel HD Graphics 405 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 387
	}, {
	  "names": ["HD Graphics 4200", "Intel HD Graphics 4200"],
	  "vendor": "Intel",
	  "performance": 520
	}, {
	  "names": ["Tegra 3", "NVIDIA GeForce ULP (Tegra 3)"],
	  "vendor": "NVIDIA",
	  "performance": 63
	}, {
	  "names": ["Tegra 4", "NVIDIA GeForce Tegra 4"],
	  "vendor": "NVIDIA",
	  "performance": 276
	}, {
	  "names": ["Tegra K1", "NVIDIA Tegra K1 Kepler GPU"],
	  "vendor": "NVIDIA",
	  "performance": 712
	}, {
	  "names": ["Tegra X1", "NVIDIA Tegra X1 Maxwell GPU"],
	  "vendor": "NVIDIA",
	  "performance": 1136
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 SLI (Laptop)"],
	  "performance": 17288
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Desktop)"],
	  "performance": 17843
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Laptop)"],
	  "performance": 17154
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 (Laptop)"],
	  "performance": 11851
	}, {
	  "names": ["NVIDIA GeForce GTX 980 SLI (Laptop)"],
	  "performance": 11976
	}, {
	  "names": ["NVIDIA GeForce GTX 980M SLI"],
	  "performance": 9197
	}, {
	  "names": ["NVIDIA GeForce GTX 980 (Laptop)"],
	  "performance": 7690
	}, {
	  "names": ["NVIDIA GeForce GTX 970M SLI"],
	  "performance": 7499
	}, {
	  "names": ["AMD Radeon RX 580 (Laptop)"],
	  "performance": 6398
	}, {
	  "names": ["AMD Radeon RX 480 (Laptop)"],
	  "performance": 3772
	}, {
	  "names": ["AMD Radeon RX 470 (Laptop)"],
	  "performance": 8011
	}, {
	  "names": ["NVIDIA GeForce GTX 880M SLI"],
	  "performance": 7411
	}, {
	  "names": ["NVIDIA GeForce GTX 780M SLI"],
	  "performance": 6732
	}, {
	  "names": ["AMD Radeon R9 290X"],
	  "performance": 7568
	}, {
	  "names": ["NVIDIA GeForce GTX 965M SLI"],
	  "performance": 5839
	}, {
	  "names": ["AMD Radeon R9 M290X Crossfire"],
	  "performance": 6623
	}, {
	  "names": ["AMD Radeon HD 8970M Crossfire"],
	  "performance": 6314
	}, {
	  "names": ["NVIDIA GeForce GTX 680M SLI"],
	  "performance": 5641
	}, {
	  "names": ["AMD Radeon HD 7970M Crossfire"],
	  "performance": 4868
	}, {
	  "names": ["NVIDIA GeForce GTX 860M SLI"],
	  "performance": 4696
	}, {
	  "names": ["AMD Radeon HD 7970"],
	  "performance": 4392
	}, {
	  "names": ["NVIDIA GeForce GTX 770M SLI"],
	  "performance": 5227
	}, {
	  "names": ["AMD Radeon RX Vega M GL", "870"],
	  "performance": 4635
	}, {
	  "names": ["NVIDIA GeForce GTX 675M SLI"],
	  "performance": 3481
	}, {
	  "names": ["NVIDIA GeForce GTX 765M SLI"],
	  "performance": 3929
	}, {
	  "names": ["AMD Radeon RX 460 (Laptop)"],
	  "performance": 3113
	}, {
	  "names": ["AMD Radeon R9 M390"],
	  "performance": 3642
	}, {
	  "names": ["NVIDIA GeForce GTX 670MX SLI"],
	  "performance": 3810
	}, {
	  "names": ["NVIDIA GeForce GTX 580M SLI"],
	  "performance": 2982
	}, {
	  "names": ["AMD Radeon HD 6990M Crossfire"],
	  "performance": 3488
	}, {
	  "names": ["NVIDIA GeForce GT 755M SLI"],
	  "performance": 3093
	}, {
	  "names": ["NVIDIA GeForce GTX 485M SLI"],
	  "performance": 3136
	}, {
	  "names": ["AMD Radeon HD 6970M Crossfire"],
	  "performance": 3189
	}, {
	  "names": ["NVIDIA GeForce GT 750M SLI"],
	  "performance": 2634
	}, {
	  "names": ["NVIDIA GeForce GTX 560M SLI"],
	  "performance": 2544
	}, {
	  "names": ["NVIDIA GeForce GT 650M SLI"],
	  "performance": 2008
	}, {
	  "names": ["NVIDIA Maxwell GPU Surface Book (940M, GDDR5)"],
	  "performance": 1790
	}, {
	  "names": ["AMD FirePro M6000"],
	  "performance": 1811
	}, {
	  "names": ["Apple A12X Bionic GPU"],
	  "performance": 4879
	}, {
	  "names": ["AMD Radeon R7 M275DX"],
	  "performance": 1490
	}, {
	  "names": ["AMD Radeon R7 512 Cores (Kaveri Desktop)"],
	  "performance": 1360
	}, {
	  "names": ["AMD Radeon R7 384 Cores (Kaveri Desktop)"],
	  "performance": 1298
	}, {
	  "names": ["Apple A12 Bionic GPU"],
	  "performance": 2821
	}, {
	  "names": ["Apple A11 Bionic GPU"],
	  "performance": 1932
	}, {
	  "names": ["Apple A10X Fusion GPU", "PowerVR"],
	  "performance": 2444
	}, {
	  "names": ["AMD Radeon R7 (Bristol Ridge)"],
	  "performance": 897
	}, {
	  "names": ["AMD Radeon R7 (Carrizo)"],
	  "performance": 1001
	}, {
	  "names": ["AMD Radeon R7 (Kaveri)"],
	  "performance": 956
	}, {
	  "names": ["Apple A9X", "PowerVR Series 7XT"],
	  "performance": 1512
	}, {
	  "names": ["AMD Radeon R5 (Bristol Ridge)"],
	  "performance": 1030
	}, {
	  "names": ["AMD Radeon R6 (Kaveri)"],
	  "performance": 715
	}, {
	  "names": ["AMD Radeon HD 8650M"],
	  "performance": 827
	}, {
	  "names": ["AMD Radeon HD 6755G2"],
	  "performance": 734
	}, {
	  "names": ["AMD Radeon HD 6740G2"],
	  "performance": 886
	}, {
	  "names": ["AMD Radeon HD 8650G"],
	  "performance": 884
	}, {
	  "names": ["AMD Radeon R5 (Stoney Ridge)"],
	  "performance": 649
	}, {
	  "names": ["Apple A10 Fusion GPU", "PowerVR"],
	  "performance": 1363
	}, {
	  "names": ["AMD Radeon HD 6720G2"],
	  "performance": 738
	}, {
	  "names": ["AMD Radeon HD 8570M"],
	  "performance": 746
	}, {
	  "names": ["Qualcomm Adreno 640"],
	  "performance": 1776
	}, {
	  "names": ["Qualcomm Adreno 630"],
	  "performance": 1095
	}, {
	  "names": ["ARM Mali-G76 MP12"],
	  "performance": 1844
	}, {
	  "names": ["ARM Mali-G76 MP10"],
	  "performance": 1559
	}, {
	  "names": ["Qualcomm Adreno 540"],
	  "performance": 777
	}, {
	  "names": ["ARM Mali-G72 MP18"],
	  "performance": 1446
	}, {
	  "names": ["ARM Mali-G71 MP20"],
	  "performance": 1020
	}, {
	  "names": ["ARM Mali-G72 MP12"],
	  "performance": 974
	}, {
	  "names": ["ARM Mali-G71 MP8"],
	  "performance": 766
	}, {
	  "names": ["AMD Radeon R5 (Carrizo)"],
	  "performance": 885
	}, {
	  "names": ["AMD Radeon R5 (Kaveri)"],
	  "performance": 529
	}, {
	  "names": ["AMD Radeon HD 7660G"],
	  "performance": 849
	}, {
	  "names": ["AMD Radeon HD 6680G2"],
	  "performance": 631
	}, {
	  "names": ["AMD Radeon HD 8550G"],
	  "performance": 808
	}, {
	  "names": ["AMD Radeon HD 7610M"],
	  "performance": 702
	}, {
	  "names": ["AMD Radeon HD 7640G"],
	  "performance": 500
	}, {
	  "names": ["Qualcomm Adreno 530"],
	  "performance": 851
	}, {
	  "names": ["PowerVR GXA6850"],
	  "performance": 711
	}, {
	  "names": ["Apple A9", "PowerVR GT7600"],
	  "performance": 925
	}, {
	  "names": ["ARM Mali-T880 MP12"],
	  "performance": 800
	}, {
	  "names": ["ARM Mali-T760 MP8"],
	  "performance": 561
	}, {
	  "names": ["ARM Mali-G71 MP2"],
	  "performance": 234
	}, {
	  "names": ["AMD Radeon HD 6620G"],
	  "performance": 424
	}, {
	  "names": ["AMD Radeon R4 (Stoney Ridge)"],
	  "performance": 549
	}, {
	  "names": ["Qualcomm Adreno 430"],
	  "performance": 585
	}, {
	  "names": ["AMD Radeon R5 (Beema", "Carrizo-L)"],
	  "performance": 523
	}, {
	  "names": ["AMD Radeon R4 (Kaveri)"],
	  "performance": 418
	}, {
	  "names": ["AMD Radeon HD 6540G2"],
	  "performance": 586
	}, {
	  "names": ["AMD Radeon HD 7500G"],
	  "performance": 448
	}, {
	  "names": ["AMD Radeon HD 8450G"],
	  "performance": 538
	}, {
	  "names": ["ARM Mali-G72 MP3"],
	  "performance": 420
	}, {
	  "names": ["ARM Mali-T880 MP4"],
	  "performance": 412
	}, {
	  "names": ["AMD Radeon HD 7520G"],
	  "performance": 450
	}, {
	  "names": ["AMD Radeon HD 6510G2"],
	  "performance": 555
	}, {
	  "names": ["AMD Radeon HD 7450M"],
	  "performance": 464
	}, {
	  "names": ["ARM Mali-T760 MP6"],
	  "performance": 392
	}, {
	  "names": ["ARM Mali-T880 MP2"],
	  "performance": 267
	}, {
	  "names": ["Intel HD Graphics (Braswell)"],
	  "performance": 294
	}, {
	  "names": ["PowerVR GX6450"],
	  "performance": 471
	}, {
	  "names": ["Qualcomm Adreno 420"],
	  "performance": 470
	}, {
	  "names": ["Intel HD Graphics (Haswell)"],
	  "performance": 489
	}, {
	  "names": ["AMD Radeon HD 6520G"],
	  "performance": 388
	}, {
	  "names": ["AMD Radeon HD 6480G"],
	  "performance": 349
	}, {
	  "names": ["Qualcomm Adreno 418"],
	  "performance": 390
	}, {
	  "names": ["Qualcomm Adreno 616"],
	  "performance": 778
	}, {
	  "names": ["AMD Radeon R2 (Mullins", "Beema", "Carrizo-L)"],
	  "performance": 308
	}, {
	  "names": ["ARM Mali-G51 MP4"],
	  "performance": 459
	}, {
	  "names": ["AMD Radeon R6 (Mullins)"],
	  "performance": 351
	}, {
	  "names": ["Intel HD Graphics (Cherry Trail)"],
	  "performance": 285
	}, {
	  "names": ["Intel HD Graphics (Ivy Bridge)"],
	  "performance": 280
	}, {
	  "names": ["Intel HD Graphics (Sandy Bridge)"],
	  "performance": 264
	}, {
	  "names": ["Qualcomm Adreno 512"],
	  "performance": 557
	}, {
	  "names": ["Qualcomm Adreno 510"],
	  "performance": 380
	}, {
	  "names": ["Qualcomm Adreno 330"],
	  "performance": 330
	}, {
	  "names": ["PowerVR G6430"],
	  "performance": 301
	}, {
	  "names": ["PowerVR GX6250"],
	  "performance": 290
	}, {
	  "names": ["PowerVR G6400"],
	  "performance": 273
	}, {
	  "names": ["Intel HD Graphics (Bay Trail)"],
	  "performance": 185
	}, {
	  "names": ["ARM Mali-T628 MP6"],
	  "performance": 246
	}, {
	  "names": ["ARM Mali-T760 MP4"],
	  "performance": 178
	}, {
	  "names": ["PowerVR SGX554MP4"],
	  "performance": 198
	}, {
	  "names": ["ARM Mali-T628 MP4"],
	  "performance": 183
	}, {
	  "names": ["Qualcomm Adreno 509"],
	  "performance": 394
	}, {
	  "names": ["Qualcomm Adreno 508"],
	  "performance": 350
	}, {
	  "names": ["Qualcomm Adreno 506"],
	  "performance": 266
	}, {
	  "names": ["Qualcomm Adreno 505"],
	  "performance": 197
	}, {
	  "names": ["ARM Mali-T860 MP2"],
	  "performance": 185
	}, {
	  "names": ["ARM Mali-T830 MP3"],
	  "performance": 328
	}, {
	  "names": ["ARM Mali-T604 MP4"],
	  "performance": 122
	}, {
	  "names": ["PowerVR G6200"],
	  "performance": 153
	}, {
	  "names": ["Qualcomm Adreno 405"],
	  "performance": 151
	}, {
	  "names": ["ARM Mali-T830 MP2"],
	  "performance": 212
	}, {
	  "names": ["ARM Mali-T624"],
	  "performance": 162
	}, {
	  "names": ["Qualcomm Adreno 320"],
	  "performance": 167
	}, {
	  "names": ["ARM Mali-T760 MP2"],
	  "performance": 152
	}, {
	  "names": ["PowerVR GE8320"],
	  "performance": 200
	}, {
	  "names": ["PowerVR GE8100"],
	  "performance": 66
	}, {
	  "names": ["ARM Mali-T720 MP4"],
	  "performance": 117
	}, {
	  "names": ["ARM Mali-450 MP4"],
	  "performance": 122
	}, {
	  "names": ["ARM Mali-T830 MP1"],
	  "performance": 132
	}, {
	  "names": ["ARM Mali-T720 MP2"],
	  "performance": 93
	}, {
	  "names": ["Qualcomm Adreno 308"],
	  "performance": 96
	}, {
	  "names": ["Qualcomm Adreno 306"],
	  "performance": 62
	}, {
	  "names": ["Qualcomm Adreno 305"],
	  "performance": 63
	}, {
	  "names": ["Qualcomm Adreno 304"],
	  "performance": 67
	}, {
	  "names": ["ARM Mali-T720"],
	  "performance": 56
	}, {
	  "names": ["Vivante GC7000UL"],
	  "performance": 47
	}, {
	  "names": ["Qualcomm Adreno 302"],
	  "performance": 34
	}, {
	  "names": ["Qualcomm Adreno 225"],
	  "performance": 89
	}, {
	  "names": ["Vivante GC4000"],
	  "performance": 40
	}, {
	  "names": ["Vivante GC1000+ Dual-Core"],
	  "performance": 43
	}, {
	  "names": ["Qualcomm Adreno 203"],
	  "performance": 35
	}];

	exports.database = database;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=database.js.map

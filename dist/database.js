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
	  "performance": 375
	}, {
	  "names": ["FirePro M4000", "AMD FirePro M4000"],
	  "vendor": "AMD",
	  "performance": 1645
	}, {
	  "names": ["Firepro M4100", "FirePro M4100", "AMD FirePro M4100"],
	  "vendor": "AMD",
	  "performance": 1059
	}, {
	  "names": ["FirePro M4150"],
	  "vendor": "AMD",
	  "performance": 1006
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
	  "performance": 2026
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
	  "names": ["FirePro V3900"],
	  "vendor": "AMD",
	  "performance": 698
	}, {
	  "names": ["FirePro V4900"],
	  "vendor": "AMD",
	  "performance": 1103
	}, {
	  "names": ["FirePro V5900"],
	  "vendor": "AMD",
	  "performance": 1325
	}, {
	  "names": ["FirePro V7900"],
	  "vendor": "AMD",
	  "performance": 2250
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
	  "performance": 988
	}, {
	  "names": ["Firepro W4190M", "FirePro W4190M", "AMD FirePro W4190M"],
	  "vendor": "AMD",
	  "performance": 1226
	}, {
	  "names": ["FirePro W4300"],
	  "vendor": "AMD",
	  "performance": 2734
	}, {
	  "names": ["FirePro W5000"],
	  "vendor": "AMD",
	  "performance": 2998
	}, {
	  "names": ["FirePro W5100"],
	  "vendor": "AMD",
	  "performance": 2912
	}, {
	  "names": ["FirePro W5130M", "AMD FirePro W5130M"],
	  "vendor": "AMD",
	  "performance": 1700
	}, {
	  "names": ["Firepro W5170M", "FirePro W5170M", "AMD FirePro W5170M"],
	  "vendor": "AMD",
	  "performance": 1475
	}, {
	  "names": ["FirePro W600"],
	  "vendor": "AMD",
	  "performance": 1725
	}, {
	  "names": ["FirePro W7000"],
	  "vendor": "AMD",
	  "performance": 4048
	}, {
	  "names": ["FirePro W7100"],
	  "vendor": "AMD",
	  "performance": 4800
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
	  "performance": 123
	}, {
	  "names": ["GeForce 410M", "NVIDIA GeForce 410M"],
	  "vendor": "NVIDIA",
	  "performance": 246
	}, {
	  "names": ["GeForce 505", "GeForce 505 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 187
	}, {
	  "names": ["GeForce 510", "GeForce 510 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 238
	}, {
	  "names": ["GeForce 605", "GeForce 605 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 310
	}, {
	  "names": ["GeForce 610M", "NVIDIA GeForce 610M"],
	  "vendor": "NVIDIA",
	  "performance": 282
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
	  "performance": 538
	}, {
	  "names": ["GeForce 710M", "NVIDIA GeForce 710M"],
	  "vendor": "NVIDIA",
	  "performance": 435
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
	  "performance": 556
	}, {
	  "names": ["GeForce 810A"],
	  "vendor": "NVIDIA",
	  "performance": 627
	}, {
	  "names": ["GeForce 810M"],
	  "vendor": "NVIDIA",
	  "performance": 405
	}, {
	  "names": ["GeForce 820A"],
	  "vendor": "NVIDIA",
	  "performance": 706
	}, {
	  "names": ["GeForce 820M", "NVIDIA GeForce 820M"],
	  "vendor": "NVIDIA",
	  "performance": 499
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
	  "performance": 986
	}, {
	  "names": ["GeForce 840A"],
	  "vendor": "NVIDIA",
	  "performance": 1137
	}, {
	  "names": ["GeForce 840M", "NVIDIA GeForce 840M"],
	  "vendor": "NVIDIA",
	  "performance": 1039
	}, {
	  "names": ["GeForce 845M", "NVIDIA GeForce 845M"],
	  "vendor": "NVIDIA",
	  "performance": 1306
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
	  "performance": 722
	}, {
	  "names": ["GeForce 920MX", "NVIDIA GeForce 920MX"],
	  "vendor": "NVIDIA",
	  "performance": 1079
	}, {
	  "names": ["GeForce 930A"],
	  "vendor": "NVIDIA",
	  "performance": 1227
	}, {
	  "names": ["GeForce 930M", "NVIDIA GeForce 930M"],
	  "vendor": "NVIDIA",
	  "performance": 1010
	}, {
	  "names": ["GeForce 930MX", "NVIDIA GeForce 930MX"],
	  "vendor": "NVIDIA",
	  "performance": 1340
	}, {
	  "names": ["GeForce 940A"],
	  "vendor": "NVIDIA",
	  "performance": 1145
	}, {
	  "names": ["GeForce 940M", "NVIDIA GeForce 940M"],
	  "vendor": "NVIDIA",
	  "performance": 1096
	}, {
	  "names": ["GeForce 940MX", "NVIDIA GeForce 940MX"],
	  "vendor": "NVIDIA",
	  "performance": 1517
	}, {
	  "names": ["GeForce 945A"],
	  "vendor": "NVIDIA",
	  "performance": 1852
	}, {
	  "names": ["GeForce 945M", "NVIDIA GeForce 945M"],
	  "vendor": "NVIDIA",
	  "performance": 2130
	}, {
	  "names": ["GeForce GT 1030", "NVIDIA GeForce GT 1030 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 2615
	}, {
	  "names": ["GeForce GT 440"],
	  "vendor": "NVIDIA",
	  "performance": 776
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
	  "performance": 293
	}, {
	  "names": ["GeForce GT 525M", "NVIDIA GeForce GT 525M"],
	  "vendor": "NVIDIA",
	  "performance": 437
	}, {
	  "names": ["GeForce GT 530", "GeForce GT 530 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 655
	}, {
	  "names": ["GeForce GT 540M", "NVIDIA GeForce GT 540M"],
	  "vendor": "NVIDIA",
	  "performance": 496
	}, {
	  "names": ["GeForce GT 545"],
	  "vendor": "NVIDIA",
	  "performance": 1248
	}, {
	  "names": ["GeForce GT 550M", "NVIDIA GeForce GT 550M"],
	  "vendor": "NVIDIA",
	  "performance": 600
	}, {
	  "names": ["GeForce GT 555M", "NVIDIA GeForce GT 555M"],
	  "vendor": "NVIDIA",
	  "performance": 683
	}, {
	  "names": ["GeForce GT 610"],
	  "vendor": "NVIDIA",
	  "performance": 296
	}, {
	  "names": ["GeForce GT 620"],
	  "vendor": "NVIDIA",
	  "performance": 350
	}, {
	  "names": ["GeForce GT 620M", "NVIDIA GeForce GT 620M"],
	  "vendor": "NVIDIA",
	  "performance": 411
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
	  "performance": 663
	}, {
	  "names": ["GeForce GT 630M", "NVIDIA GeForce GT 630M"],
	  "vendor": "NVIDIA",
	  "performance": 543
	}, {
	  "names": ["GeForce GT 635", "GeForce GT 635 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 819
	}, {
	  "names": ["GeForce GT 635M", "NVIDIA GeForce GT 635M"],
	  "vendor": "NVIDIA",
	  "performance": 572
	}, {
	  "names": ["GeForce GT 640"],
	  "vendor": "NVIDIA",
	  "performance": 1156
	}, {
	  "names": ["GeForce GT 640M", "NVIDIA GeForce GT 640M"],
	  "vendor": "NVIDIA",
	  "performance": 910
	}, {
	  "names": ["GeForce GT 640M LE", "NVIDIA GeForce GT 640M LE"],
	  "vendor": "NVIDIA",
	  "performance": 686
	}, {
	  "names": ["GeForce GT 645", "GeForce GT 645 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2096
	}, {
	  "names": ["GeForce GT 645M", "NVIDIA GeForce GT 645M"],
	  "vendor": "NVIDIA",
	  "performance": 938
	}, {
	  "names": ["GeForce GT 650M", "NVIDIA GeForce GT 650M"],
	  "vendor": "NVIDIA",
	  "performance": 1159
	}, {
	  "names": ["GeForce GT 705", "GeForce GT 705 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 369
	}, {
	  "names": ["GeForce GT 710"],
	  "vendor": "NVIDIA",
	  "performance": 639
	}, {
	  "names": ["GeForce GT 710M"],
	  "vendor": "NVIDIA",
	  "performance": 425
	}, {
	  "names": ["GeForce GT 720"],
	  "vendor": "NVIDIA",
	  "performance": 571
	}, {
	  "names": ["GeForce GT 720A"],
	  "vendor": "NVIDIA",
	  "performance": 555
	}, {
	  "names": ["GeForce GT 720M", "NVIDIA GeForce GT 720M"],
	  "vendor": "NVIDIA",
	  "performance": 442
	}, {
	  "names": ["GeForce GT 730"],
	  "vendor": "NVIDIA",
	  "performance": 794
	}, {
	  "names": ["GeForce GT 730M", "NVIDIA GeForce GT 730M"],
	  "vendor": "NVIDIA",
	  "performance": 849
	}, {
	  "names": ["GeForce GT 735M", "NVIDIA GeForce GT 735M"],
	  "vendor": "NVIDIA",
	  "performance": 662
	}, {
	  "names": ["GeForce GT 740"],
	  "vendor": "NVIDIA",
	  "performance": 1536
	}, {
	  "names": ["GeForce GT 740A"],
	  "vendor": "NVIDIA",
	  "performance": 705
	}, {
	  "names": ["GeForce GT 740M", "NVIDIA GeForce GT 740M"],
	  "vendor": "NVIDIA",
	  "performance": 769
	}, {
	  "names": ["GeForce GT 745A"],
	  "vendor": "NVIDIA",
	  "performance": 1144
	}, {
	  "names": ["GeForce GT 745M", "NVIDIA GeForce GT 745M"],
	  "vendor": "NVIDIA",
	  "performance": 974
	}, {
	  "names": ["GeForce GT 750M", "NVIDIA GeForce GT 750M"],
	  "vendor": "NVIDIA",
	  "performance": 1345
	}, {
	  "names": ["GeForce GT 755M", "NVIDIA GeForce GT 755M"],
	  "vendor": "NVIDIA",
	  "performance": 1653
	}, {
	  "names": ["GeForce GT 820M"],
	  "vendor": "NVIDIA",
	  "performance": 673
	}, {
	  "names": ["GeForce GTX 1050", "NVIDIA GeForce GTX 1050 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 5475
	}, {
	  "names": ["GeForce GTX 1050 (Mobile)", "GeForce GTX 1050 Mobile", "NVIDIA GeForce GTX 1050 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 4462
	}, {
	  "names": ["GeForce GTX 1050 Ti", "NVIDIA GeForce GTX 1050 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 6404
	}, {
	  "names": ["GeForce GTX 1050 Ti (Mobile)", "GeForce GTX 1050 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 5919
	}, {
	  "names": ["GeForce GTX 1050 Ti with Max-Q Design", "GeForce GTX 1050 Ti Max-Q", "NVIDIA GeForce GTX 1050 Ti Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 5646
	}, {
	  "names": ["GeForce GTX 1050 with Max-Q Design", "GeForce GTX 1050 Max-Q", "NVIDIA GeForce GTX 1050 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 3964
	}, {
	  "names": ["GeForce GTX 1060", "GeForce GTX 1060 Mobile", "NVIDIA GeForce GTX 1060 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 10238
	}, {
	  "names": ["GeForce GTX 1060 (Mobile)", "NVIDIA GeForce GTX 1060 (Desktop)"],
	  "performance": 8161
	}, {
	  "names": ["GeForce GTX 1060 with Max-Q Design", "GeForce GTX 1060 Max-Q", "NVIDIA GeForce GTX 1060 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 7991
	}, {
	  "names": ["GeForce GTX 1070", "NVIDIA GeForce GTX 1070 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 13329
	}, {
	  "names": ["GeForce GTX 1070 (Mobile)", "GeForce GTX 1070 Mobile", "NVIDIA GeForce GTX 1070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 10465
	}, {
	  "names": ["GeForce GTX 1070 Ti", "NVIDIA GeForce GTX 1070 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 13992
	}, {
	  "names": ["GeForce GTX 1070 with Max-Q Design", "GeForce GTX 1070 Max-Q", "NVIDIA GeForce GTX 1070 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 10202
	}, {
	  "names": ["GeForce GTX 1080", "NVIDIA GeForce GTX 1080 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 14814
	}, {
	  "names": ["GeForce GTX 1080 Ti", "NVIDIA GeForce GTX 1080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 17580
	}, {
	  "names": ["GeForce GTX 1080 with Max-Q Design", "GeForce GTX 1080 Max-Q", "NVIDIA GeForce GTX 1080 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 11555
	}, {
	  "names": ["GeForce GTX 1650", "NVIDIA GeForce GTX 1650 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 7823
	}, {
	  "names": ["GeForce GTX 1650 (Mobile)", "GeForce GTX 1650 Mobile", "NVIDIA GeForce GTX 1650 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 6969
	}, {
	  "names": ["GeForce GTX 1650 Ti", "NVIDIA GeForce GTX 1650 Ti (Desktop)"],
	  "performance": 7707
	}, {
	  "names": ["GeForce GTX 1650 Ti with Max-Q Design", "GeForce GTX 1650 Max-Q", "NVIDIA GeForce GTX 1650 Ti Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 5838
	}, {
	  "names": ["GeForce GTX 1650 with Max-Q Design", "NVIDIA GeForce GTX 1650 Max-Q"],
	  "performance": 5807
	}, {
	  "names": ["GeForce GTX 1660", "NVIDIA GeForce GTX 1660 Ti Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 11514
	}, {
	  "names": ["GeForce GTX 1660 SUPER", "NVIDIA GeForce GTX 1660 Super (Desktop)"],
	  "performance": 12702
	}, {
	  "names": ["GeForce GTX 1660 Ti", "NVIDIA GeForce GTX 1660 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12437
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
	  "performance": 1562
	}, {
	  "names": ["GeForce GTX 555", "GeForce GTX 555 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 1935
	}, {
	  "names": ["GeForce GTX 560", "NVIDIA GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 2703
	}, {
	  "names": ["GeForce GTX 560 SE"],
	  "vendor": "NVIDIA",
	  "performance": 1880
	}, {
	  "names": ["GeForce GTX 560 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3062
	}, {
	  "names": ["GeForce GTX 560M", "NVIDIA GeForce GTX 560M"],
	  "vendor": "NVIDIA",
	  "performance": 1367
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
	  "performance": 1953
	}, {
	  "names": ["GeForce GTX 650"],
	  "vendor": "NVIDIA",
	  "performance": 1770
	}, {
	  "names": ["GeForce GTX 650 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 2551
	}, {
	  "names": ["GeForce GTX 650 Ti BOOST", "GeForce GTX 650 Ti Boost"],
	  "vendor": "NVIDIA",
	  "performance": 3194
	}, {
	  "names": ["GeForce GTX 660", "NVIDIA GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3951
	}, {
	  "names": ["GeForce GTX 660 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 4373
	}, {
	  "names": ["GeForce GTX 660M", "NVIDIA GeForce GTX 660M"],
	  "vendor": "NVIDIA",
	  "performance": 1456
	}, {
	  "names": ["GeForce GTX 670"],
	  "vendor": "NVIDIA",
	  "performance": 5314
	}, {
	  "names": ["GeForce GTX 670M", "NVIDIA GeForce GTX 670M"],
	  "vendor": "NVIDIA",
	  "performance": 1720
	}, {
	  "names": ["GeForce GTX 670MX", "NVIDIA GeForce GTX 670MX"],
	  "vendor": "NVIDIA",
	  "performance": 1844
	}, {
	  "names": ["GeForce GTX 675M", "NVIDIA GeForce GTX 675M"],
	  "vendor": "NVIDIA",
	  "performance": 2081
	}, {
	  "names": ["GeForce GTX 675MX", "NVIDIA GeForce GTX 675MX"],
	  "vendor": "NVIDIA",
	  "performance": 1513
	}, {
	  "names": ["GeForce GTX 680", "NVIDIA GeForce GTX 680"],
	  "vendor": "NVIDIA",
	  "performance": 5594
	}, {
	  "names": ["GeForce GTX 680M", "NVIDIA GeForce GTX 680M"],
	  "vendor": "NVIDIA",
	  "performance": 2942
	}, {
	  "names": ["GeForce GTX 680MX", "GeForce GTX 680MX Mac Edition", "NVIDIA GeForce GTX 680MX"],
	  "vendor": "NVIDIA",
	  "performance": 4271
	}, {
	  "names": ["GeForce GTX 690"],
	  "vendor": "NVIDIA",
	  "performance": 5770
	}, {
	  "names": ["GeForce GTX 745", "GeForce GTX 745 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 2218
	}, {
	  "names": ["GeForce GTX 750", "NVIDIA GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3404
	}, {
	  "names": ["GeForce GTX 750 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 3930
	}, {
	  "names": ["GeForce GTX 760", "NVIDIA GeForce GTX 760"],
	  "vendor": "NVIDIA",
	  "performance": 4749
	}, {
	  "names": ["GeForce GTX 760 Ti", "GeForce GTX 760 Ti OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5119
	}, {
	  "names": ["GeForce GTX 760 Ti OEM", "GeForce GTX 760 OEM"],
	  "vendor": "NVIDIA",
	  "performance": 5275
	}, {
	  "names": ["GeForce GTX 760A"],
	  "vendor": "NVIDIA",
	  "performance": 1281
	}, {
	  "names": ["GeForce GTX 760M", "NVIDIA GeForce GTX 760M"],
	  "vendor": "NVIDIA",
	  "performance": 1635
	}, {
	  "names": ["GeForce GTX 765M", "NVIDIA GeForce GTX 765M"],
	  "vendor": "NVIDIA",
	  "performance": 1957
	}, {
	  "names": ["GeForce GTX 770"],
	  "vendor": "NVIDIA",
	  "performance": 5906
	}, {
	  "names": ["GeForce GTX 770M", "NVIDIA GeForce GTX 770M SLI"],
	  "performance": 2766
	}, {
	  "names": ["GeForce GTX 775M", "GeForce GTX 775M Mac Edition", "NVIDIA GeForce GTX 775M"],
	  "vendor": "NVIDIA",
	  "performance": 4222
	}, {
	  "names": ["GeForce GTX 780", "NVIDIA GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 7866
	}, {
	  "names": ["GeForce GTX 780 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 9221
	}, {
	  "names": ["GeForce GTX 780M", "NVIDIA GeForce GTX 780M"],
	  "vendor": "NVIDIA",
	  "performance": 3989
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
	  "performance": 3202
	}, {
	  "names": ["GeForce GTX 870M", "NVIDIA GeForce GTX 870M"],
	  "vendor": "NVIDIA",
	  "performance": 3461
	}, {
	  "names": ["GeForce GTX 880M", "NVIDIA GeForce GTX 880M"],
	  "vendor": "NVIDIA",
	  "performance": 3710
	}, {
	  "names": ["GeForce GTX 950", "NVIDIA GeForce GTX 950"],
	  "vendor": "NVIDIA",
	  "performance": 5333
	}, {
	  "names": ["GeForce GTX 950A"],
	  "vendor": "NVIDIA",
	  "performance": 2432
	}, {
	  "names": ["GeForce GTX 950M", "NVIDIA GeForce GTX 950M"],
	  "vendor": "NVIDIA",
	  "performance": 2626
	}, {
	  "names": ["GeForce GTX 960", "NVIDIA GeForce GTX 960"],
	  "vendor": "NVIDIA",
	  "performance": 5987
	}, {
	  "names": ["GeForce GTX 960A"],
	  "vendor": "NVIDIA",
	  "performance": 2411
	}, {
	  "names": ["GeForce GTX 960M", "NVIDIA GeForce GTX 960M"],
	  "vendor": "NVIDIA",
	  "performance": 3496
	}, {
	  "names": ["GeForce GTX 965M", "NVIDIA GeForce GTX 965M"],
	  "vendor": "NVIDIA",
	  "performance": 3832
	}, {
	  "names": ["GeForce GTX 970", "NVIDIA GeForce GTX 970"],
	  "vendor": "NVIDIA",
	  "performance": 9645
	}, {
	  "names": ["GeForce GTX 970M", "NVIDIA GeForce GTX 970M"],
	  "vendor": "NVIDIA",
	  "performance": 5667
	}, {
	  "names": ["GeForce GTX 980", "NVIDIA GeForce GTX 980"],
	  "vendor": "NVIDIA",
	  "performance": 11080
	}, {
	  "names": ["GeForce GTX 980 Ti", "NVIDIA GeForce GTX 980 Ti"],
	  "vendor": "NVIDIA",
	  "performance": 13745
	}, {
	  "names": ["GeForce GTX 980M", "NVIDIA GeForce GTX 980M"],
	  "vendor": "NVIDIA",
	  "performance": 7372
	}, {
	  "names": ["GeForce GTX Titan", "GeForce GTX TITAN"],
	  "vendor": "NVIDIA",
	  "performance": 8780
	}, {
	  "names": ["GeForce GTX TITAN Black", "GeForce GTX TITAN BLACK"],
	  "vendor": "NVIDIA",
	  "performance": 9007
	}, {
	  "names": ["GeForce GTX TITAN X"],
	  "vendor": "NVIDIA",
	  "performance": 12770
	}, {
	  "names": ["GeForce GTX TITAN Z"],
	  "vendor": "NVIDIA",
	  "performance": 8238
	}, {
	  "names": ["GeForce MX110", "NVIDIA GeForce MX110"],
	  "vendor": "NVIDIA",
	  "performance": 1483
	}, {
	  "names": ["GeForce MX130", "NVIDIA GeForce MX130"],
	  "vendor": "NVIDIA",
	  "performance": 1924
	}, {
	  "names": ["GeForce MX150", "NVIDIA GeForce MX150"],
	  "vendor": "NVIDIA",
	  "performance": 2357
	}, {
	  "names": ["GeForce MX230", "NVIDIA GeForce MX230"],
	  "vendor": "NVIDIA",
	  "performance": 1951
	}, {
	  "names": ["GeForce MX330", "NVIDIA GeForce MX330"],
	  "performance": 2717
	}, {
	  "names": ["GeForce MX350", "NVIDIA GeForce MX350"],
	  "performance": 3014
	}, {
	  "names": ["GeForce MX450", "NVIDIA GeForce MX450"],
	  "performance": 1923
	}, {
	  "names": ["GeForce RTX 2060", "NVIDIA GeForce RTX 2060 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 14157
	}, {
	  "names": ["GeForce RTX 2060 (Mobile)", "GeForce RTX 2060 Mobile", "NVIDIA GeForce RTX 2060 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 11355
	}, {
	  "names": ["GeForce RTX 2060 SUPER", "NVIDIA GeForce RTX 2060 Super (Desktop)"],
	  "performance": 16352
	}, {
	  "names": ["GeForce RTX 2060 with Max-Q Design", "NVIDIA GeForce RTX 2060 Max-Q"],
	  "performance": 9792
	}, {
	  "names": ["GeForce RTX 2070", "NVIDIA GeForce RTX 2070 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 16204
	}, {
	  "names": ["GeForce RTX 2070 (Mobile)", "GeForce RTX 2070 Mobile", "NVIDIA GeForce RTX 2070 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 12354
	}, {
	  "names": ["GeForce RTX 2070 SUPER", "NVIDIA GeForce RTX 2070 Super Mobile"],
	  "performance": 18109
	}, {
	  "names": ["GeForce RTX 2070 Super with Max-Q Design", "GeForce RTX 2070 Max-Q", "NVIDIA GeForce RTX 2070 Super Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 14508
	}, {
	  "names": ["GeForce RTX 2070 with Max-Q Design", "NVIDIA GeForce RTX 2070 Max-Q"],
	  "performance": 12359
	}, {
	  "names": ["GeForce RTX 2080", "NVIDIA GeForce RTX 2080 Mobile"],
	  "vendor": "NVIDIA",
	  "performance": 18611
	}, {
	  "names": ["GeForce RTX 2080 (Mobile)", "GeForce RTX 2080 Mobile", "NVIDIA GeForce RTX 2080 (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 15107
	}, {
	  "names": ["GeForce RTX 2080 SUPER", "NVIDIA GeForce RTX 2080 Super Mobile"],
	  "performance": 19318
	}, {
	  "names": ["GeForce RTX 2080 Super with Max-Q Design", "GeForce RTX 2080 Max-Q", "NVIDIA GeForce RTX 2080 Super Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 14194
	}, {
	  "names": ["GeForce RTX 2080 Ti", "NVIDIA GeForce RTX 2080 Ti (Desktop)"],
	  "vendor": "NVIDIA",
	  "performance": 21535
	}, {
	  "names": ["GeForce RTX 2080 with Max-Q Design", "NVIDIA GeForce RTX 2080 Max-Q"],
	  "performance": 14325
	}, {
	  "names": ["GeForce RTX 3080", "NVIDIA GeForce RTX 3080"],
	  "performance": 23779
	}, {
	  "names": ["GeForce RTX 3090", "NVIDIA GeForce RTX 3090"],
	  "performance": 25184
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
	  "performance": 783
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
	  "performance": 258
	}, {
	  "names": ["Intel HD 4000", "Intel HD Graphics 4000"],
	  "performance": 329
	}, {
	  "names": ["Intel HD 4400", "Intel HD Graphics 4400"],
	  "performance": 529
	}, {
	  "names": ["Intel HD 4600", "Intel HD Graphics 4600"],
	  "performance": 639
	}, {
	  "names": ["Intel HD 500", "Intel HD Graphics 500"],
	  "performance": 309
	}, {
	  "names": ["Intel HD 5000", "Intel HD Graphics 5000"],
	  "performance": 562
	}, {
	  "names": ["Intel HD 505", "Intel HD Graphics 505"],
	  "performance": 358
	}, {
	  "names": ["Intel HD 510", "Intel HD Graphics 510"],
	  "performance": 619
	}, {
	  "names": ["Intel HD 515", "Intel HD Graphics 515"],
	  "performance": 612
	}, {
	  "names": ["Intel HD 520", "Intel HD Graphics 520"],
	  "performance": 855
	}, {
	  "names": ["Intel HD 530", "Intel HD Graphics 530"],
	  "performance": 994
	}, {
	  "names": ["Intel HD 5300", "Intel HD Graphics 5300"],
	  "performance": 406
	}, {
	  "names": ["Intel HD 5500", "Intel HD Graphics 5500"],
	  "performance": 579
	}, {
	  "names": ["Intel HD 5600", "Intel HD Graphics 5600"],
	  "performance": 712
	}, {
	  "names": ["Intel HD 6000", "Intel HD Graphics 6000"],
	  "performance": 832
	}, {
	  "names": ["Intel HD 610", "Intel HD Graphics 610"],
	  "performance": 674
	}, {
	  "names": ["Intel HD 615", "Intel HD Graphics 615"],
	  "performance": 757
	}, {
	  "names": ["Intel HD 630", "Intel HD Graphics 630"],
	  "performance": 1170
	}, {
	  "names": ["Intel HD Graphics 620", "HD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 925
	}, {
	  "names": ["Intel HD P530", "Intel HD Graphics P530"],
	  "performance": 1480
	}, {
	  "names": ["Intel HD P630", "Intel HD Graphics P630"],
	  "performance": 1276
	}, {
	  "names": ["Intel Iris 5100", "Intel Iris Graphics 5100"],
	  "performance": 740
	}, {
	  "names": ["Intel Iris 540", "Intel Iris Graphics 540"],
	  "performance": 1236
	}, {
	  "names": ["Intel Iris 550", "Intel Iris Graphics 550"],
	  "performance": 1384
	}, {
	  "names": ["Intel Iris 6100", "Intel Iris Graphics 6100"],
	  "performance": 896
	}, {
	  "names": ["Intel Iris 650", "Intel Iris Plus Graphics 650"],
	  "performance": 1795
	}, {
	  "names": ["Intel Iris Plus", "Intel Iris Plus Graphics G7 (Ice Lake 64 EU)"],
	  "performance": 1880
	}, {
	  "names": ["Intel Iris Plus 640", "Intel Iris Plus Graphics 640"],
	  "performance": 1274
	}, {
	  "names": ["Intel Iris Plus 645", "Intel Iris Plus Graphics 645"],
	  "performance": 1813
	}, {
	  "names": ["Intel Iris Plus 655", "Intel Iris Plus Graphics 655"],
	  "performance": 1809
	}, {
	  "names": ["Intel Iris Pro 5200", "Intel Iris Pro Graphics 5200"],
	  "performance": 1015
	}, {
	  "names": ["Intel Iris Pro 580", "Intel Iris Pro Graphics 580"],
	  "performance": 2104
	}, {
	  "names": ["Intel Iris Pro Graphics 6200", "Iris Pro Graphics 6200"],
	  "vendor": "Intel",
	  "performance": 1542
	}, {
	  "names": ["Intel Iris Pro P580", "Intel Iris Pro Graphics P580"],
	  "performance": 2169
	}, {
	  "names": ["Intel Iris Xe", "Intel Iris Xe Graphics G7 96EUs"],
	  "performance": 3250
	}, {
	  "names": ["Intel UHD", "Intel UHD Graphics Xe G4 48EUs"],
	  "performance": 2016
	}, {
	  "names": ["Intel UHD 600", "Intel UHD Graphics 600"],
	  "performance": 336
	}, {
	  "names": ["Intel UHD 605", "Intel UHD Graphics 605"],
	  "performance": 375
	}, {
	  "names": ["Intel UHD 610", "Intel UHD Graphics 610"],
	  "performance": 721
	}, {
	  "names": ["Intel UHD 615", "Intel UHD Graphics 615"],
	  "performance": 774
	}, {
	  "names": ["Intel UHD 617", "Intel UHD Graphics 617"],
	  "performance": 858
	}, {
	  "names": ["Intel UHD 620", "Intel UHD Graphics 620"],
	  "performance": 889
	}, {
	  "names": ["Intel UHD 630", "Intel UHD Graphics 630"],
	  "performance": 1555
	}, {
	  "names": ["Intel UHD Graphics 620", "UHD Graphics 620"],
	  "vendor": "Intel",
	  "performance": 1053
	}, {
	  "names": ["Intel UHD P630", "Intel UHD Graphics P630"],
	  "performance": 2997
	}, {
	  "names": ["Mobility Radeon HD 5570"],
	  "vendor": "ATI",
	  "performance": 559
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
	  "performance": 121
	}, {
	  "names": ["NVS 310"],
	  "vendor": "NVIDIA",
	  "performance": 241
	}, {
	  "names": ["NVS 315"],
	  "vendor": "NVIDIA",
	  "performance": 295
	}, {
	  "names": ["NVS 4200M", "NVIDIA NVS 4200M"],
	  "vendor": "NVIDIA",
	  "performance": 247
	}, {
	  "names": ["NVS 510"],
	  "vendor": "NVIDIA",
	  "performance": 763
	}, {
	  "names": ["NVS 5200M", "NVIDIA NVS 5200M"],
	  "vendor": "NVIDIA",
	  "performance": 556
	}, {
	  "names": ["NVS 5400M", "NVIDIA NVS 5400M"],
	  "vendor": "NVIDIA",
	  "performance": 641
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
	  "performance": 586
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
	  "performance": 1082
	}, {
	  "names": ["Quadro 400"],
	  "vendor": "NVIDIA",
	  "performance": 163
	}, {
	  "names": ["Quadro 4000M", "NVIDIA Quadro 4000M"],
	  "vendor": "NVIDIA",
	  "performance": 1222
	}, {
	  "names": ["Quadro 410"],
	  "vendor": "NVIDIA",
	  "performance": 441
	}, {
	  "names": ["Quadro 5000", "NVIDIA Quadro RTX 5000 (Laptop)"],
	  "vendor": "NVIDIA",
	  "performance": 1982
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
	  "performance": 780
	}, {
	  "names": ["Quadro K1100M", "NVIDIA Quadro K1100M"],
	  "vendor": "NVIDIA",
	  "performance": 1100
	}, {
	  "names": ["Quadro K1200"],
	  "vendor": "NVIDIA",
	  "performance": 2861
	}, {
	  "names": ["Quadro K2000"],
	  "vendor": "NVIDIA",
	  "performance": 1588
	}, {
	  "names": ["Quadro K2000D"],
	  "vendor": "NVIDIA",
	  "performance": 1650
	}, {
	  "names": ["Quadro K2000M", "NVIDIA Quadro K2000M"],
	  "vendor": "NVIDIA",
	  "performance": 1033
	}, {
	  "names": ["Quadro K2100M", "NVIDIA Quadro K2100M"],
	  "vendor": "NVIDIA",
	  "performance": 1388
	}, {
	  "names": ["Quadro K2200"],
	  "vendor": "NVIDIA",
	  "performance": 3565
	}, {
	  "names": ["Quadro K2200M"],
	  "vendor": "NVIDIA",
	  "performance": 3893
	}, {
	  "names": ["Quadro K3000M", "NVIDIA Quadro K3000M"],
	  "vendor": "NVIDIA",
	  "performance": 1652
	}, {
	  "names": ["Quadro K3100M", "NVIDIA Quadro K3100M"],
	  "vendor": "NVIDIA",
	  "performance": 2286
	}, {
	  "names": ["Quadro K4000"],
	  "vendor": "NVIDIA",
	  "performance": 2679
	}, {
	  "names": ["Quadro K4000M", "NVIDIA Quadro K4000M"],
	  "vendor": "NVIDIA",
	  "performance": 2109
	}, {
	  "names": ["Quadro K4100M", "NVIDIA Quadro K4100M"],
	  "vendor": "NVIDIA",
	  "performance": 2395
	}, {
	  "names": ["Quadro K420"],
	  "vendor": "NVIDIA",
	  "performance": 767
	}, {
	  "names": ["Quadro K4200"],
	  "vendor": "NVIDIA",
	  "performance": 4228
	}, {
	  "names": ["Quadro K5000"],
	  "vendor": "NVIDIA",
	  "performance": 3923
	}, {
	  "names": ["Quadro K5000M", "NVIDIA Quadro K5000M"],
	  "vendor": "NVIDIA",
	  "performance": 2850
	}, {
	  "names": ["Quadro K500M", "NVIDIA Quadro K500M"],
	  "vendor": "NVIDIA",
	  "performance": 480
	}, {
	  "names": ["Quadro K5100M", "NVIDIA Quadro K5100M"],
	  "vendor": "NVIDIA",
	  "performance": 2868
	}, {
	  "names": ["Quadro K510M", "NVIDIA Quadro K510M"],
	  "vendor": "NVIDIA",
	  "performance": 651
	}, {
	  "names": ["Quadro K5200"],
	  "vendor": "NVIDIA",
	  "performance": 5855
	}, {
	  "names": ["Quadro K600"],
	  "vendor": "NVIDIA",
	  "performance": 778
	}, {
	  "names": ["Quadro K6000"],
	  "vendor": "NVIDIA",
	  "performance": 8503
	}, {
	  "names": ["Quadro K610M", "NVIDIA Quadro K610M"],
	  "vendor": "NVIDIA",
	  "performance": 725
	}, {
	  "names": ["Quadro K620"],
	  "vendor": "NVIDIA",
	  "performance": 2274
	}, {
	  "names": ["Quadro K620M", "NVIDIA Quadro K620M"],
	  "vendor": "NVIDIA",
	  "performance": 1150
	}, {
	  "names": ["Quadro M1000M", "NVIDIA Quadro M1000M"],
	  "vendor": "NVIDIA",
	  "performance": 3002
	}, {
	  "names": ["Quadro M1200", "Quadro M1200 Mobile", "NVIDIA Quadro M1200"],
	  "vendor": "NVIDIA",
	  "performance": 3564
	}, {
	  "names": ["Quadro M2000"],
	  "vendor": "NVIDIA",
	  "performance": 4015
	}, {
	  "names": ["Quadro M2000M", "NVIDIA Quadro M2000M"],
	  "vendor": "NVIDIA",
	  "performance": 3576
	}, {
	  "names": ["Quadro M2200", "Quadro M2200 Mobile", "NVIDIA Quadro M2200"],
	  "vendor": "NVIDIA",
	  "performance": 4486
	}, {
	  "names": ["Quadro M3000M", "NVIDIA Quadro M3000M"],
	  "vendor": "NVIDIA",
	  "performance": 5424
	}, {
	  "names": ["Quadro M4000"],
	  "vendor": "NVIDIA",
	  "performance": 6526
	}, {
	  "names": ["Quadro M4000M", "NVIDIA Quadro M4000M"],
	  "vendor": "NVIDIA",
	  "performance": 6479
	}, {
	  "names": ["Quadro M5000"],
	  "vendor": "NVIDIA",
	  "performance": 9245
	}, {
	  "names": ["Quadro M5000M", "NVIDIA Quadro M5000M"],
	  "vendor": "NVIDIA",
	  "performance": 6432
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
	  "performance": 12164
	}, {
	  "names": ["Quadro M600M", "NVIDIA Quadro M600M"],
	  "vendor": "NVIDIA",
	  "performance": 1932
	}, {
	  "names": ["Quadro M620", "Quadro M620 Mobile", "NVIDIA Quadro M620"],
	  "vendor": "NVIDIA",
	  "performance": 2805
	}, {
	  "names": ["Quadro P1000", "NVIDIA Quadro P1000"],
	  "vendor": "NVIDIA",
	  "performance": 4328
	}, {
	  "names": ["Quadro P2000", "NVIDIA Quadro P2000"],
	  "vendor": "NVIDIA",
	  "performance": 7245
	}, {
	  "names": ["Quadro P2000 with Max-Q Design", "NVIDIA Quadro P2000 Max-Q"],
	  "performance": 4991
	}, {
	  "names": ["Quadro P3000", "Quadro P3000 Mobile", "NVIDIA Quadro P3000"],
	  "vendor": "NVIDIA",
	  "performance": 6703
	}, {
	  "names": ["Quadro P3200", "Quadro P3200 Mobile", "NVIDIA Quadro P3200"],
	  "vendor": "NVIDIA",
	  "performance": 7799
	}, {
	  "names": ["Quadro P3200 with Max-Q Design", "Quadro P3200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 8942
	}, {
	  "names": ["Quadro P400"],
	  "vendor": "NVIDIA",
	  "performance": 1661
	}, {
	  "names": ["Quadro P4000", "NVIDIA Quadro P4000"],
	  "vendor": "NVIDIA",
	  "performance": 11707
	}, {
	  "names": ["Quadro P4000 with Max-Q Design", "Quadro P4000 Max-Q", "NVIDIA Quadro P4000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9083
	}, {
	  "names": ["Quadro P4200", "Quadro P4200 Mobile", "NVIDIA Quadro P4200"],
	  "vendor": "NVIDIA",
	  "performance": 12019
	}, {
	  "names": ["Quadro P500", "Quadro P500 Mobile", "NVIDIA Quadro P500"],
	  "vendor": "NVIDIA",
	  "performance": 1742
	}, {
	  "names": ["Quadro P5000", "NVIDIA Quadro P5000"],
	  "vendor": "NVIDIA",
	  "performance": 11450
	}, {
	  "names": ["Quadro P520", "NVIDIA Quadro P520"],
	  "performance": 2178
	}, {
	  "names": ["Quadro P5200", "Quadro P5200 Mobile", "NVIDIA Quadro P5200"],
	  "vendor": "NVIDIA",
	  "performance": 11630
	}, {
	  "names": ["Quadro P5200 with Max-Q Design", "Quadro P5200 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 9796
	}, {
	  "names": ["Quadro P600", "NVIDIA Quadro P600"],
	  "vendor": "NVIDIA",
	  "performance": 3427
	}, {
	  "names": ["Quadro P6000"],
	  "vendor": "NVIDIA",
	  "performance": 15005
	}, {
	  "names": ["Quadro P620", "NVIDIA Quadro P620"],
	  "vendor": "NVIDIA",
	  "performance": 3658
	}, {
	  "names": ["Quadro RTX 3000", "NVIDIA Quadro RTX 3000 (Laptop)"],
	  "performance": 11269
	}, {
	  "names": ["Quadro RTX 3000 with Max-Q Design", "NVIDIA Quadro RTX 3000 Max-Q"],
	  "performance": 8306
	}, {
	  "names": ["Quadro RTX 4000", "NVIDIA Quadro RTX 4000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 15142
	}, {
	  "names": ["Quadro RTX 5000", "NVIDIA Quadro RTX 5000 Max-Q"],
	  "vendor": "NVIDIA",
	  "performance": 17321
	}, {
	  "names": ["Quadro RTX 6000"],
	  "vendor": "NVIDIA",
	  "performance": 19731
	}, {
	  "names": ["Quadro RTX 8000"],
	  "vendor": "NVIDIA",
	  "performance": 19221
	}, {
	  "names": ["Quadro T1000", "NVIDIA Quadro T1000 (Laptop)"],
	  "performance": 6448
	}, {
	  "names": ["Quadro T1000 with Max-Q Design", "NVIDIA Quadro T1000 Max-Q"],
	  "performance": 6888
	}, {
	  "names": ["Quadro T2000", "NVIDIA Quadro T2000 (Laptop)"],
	  "performance": 6785
	}, {
	  "names": ["Quadro T2000 with Max-Q Design", "NVIDIA Quadro T2000 Max-Q"],
	  "performance": 6243
	}, {
	  "names": ["Qualcomm Adreno 630 GPU", "Qualcomm Adreno 630"],
	  "performance": 249
	}, {
	  "names": ["Radeon 520", "Radeon 520 Mobile", "AMD Radeon 520"],
	  "vendor": "AMD",
	  "performance": 866
	}, {
	  "names": ["Radeon 530", "Radeon 530 Mobile", "AMD Radeon 530"],
	  "vendor": "AMD",
	  "performance": 938
	}, {
	  "names": ["Radeon 535", "Radeon 535 Mobile"],
	  "vendor": "AMD",
	  "performance": 1130
	}, {
	  "names": ["Radeon 540", "Radeon RX 540 Mobile", "AMD Radeon RX 540"],
	  "vendor": "AMD",
	  "performance": 1376
	}, {
	  "names": ["Radeon 540X", "Radeon 540X Mobile", "AMD Radeon 540X"],
	  "vendor": "AMD",
	  "performance": 1320
	}, {
	  "names": ["Radeon 550X", "Radeon 550X 640SP", "AMD Radeon RX 550X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 1564
	}, {
	  "names": ["Radeon 620", "AMD Radeon 620"],
	  "performance": 859
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
	  "performance": 221
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
	  "performance": 149
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
	  "performance": 231
	}, {
	  "names": ["Radeon HD 6410D", "Radeon HD 6410D IGP"],
	  "vendor": "AMD",
	  "performance": 220
	}, {
	  "names": ["Radeon HD 6430M", "AMD Radeon HD 6430M"],
	  "vendor": "AMD",
	  "performance": 193
	}, {
	  "names": ["Radeon HD 6450", "AMD Radeon HD 6450 GDDR5"],
	  "vendor": "AMD",
	  "performance": 194
	}, {
	  "names": ["Radeon HD 6450A"],
	  "vendor": "AMD",
	  "performance": 260
	}, {
	  "names": ["Radeon HD 6470M", "AMD Radeon HD 6470M"],
	  "vendor": "AMD",
	  "performance": 228
	}, {
	  "names": ["Radeon HD 6480G", "Radeon HD 6480G IGP", "AMD Radeon HD 6480G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 275
	}, {
	  "names": ["Radeon HD 6490M", "AMD Radeon HD 6490M"],
	  "vendor": "AMD",
	  "performance": 378
	}, {
	  "names": ["Radeon HD 6520G", "Radeon HD 6520G IGP", "AMD Radeon HD 6520G + HD 7450M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 300
	}, {
	  "names": ["Radeon HD 6530D", "Radeon HD 6530D IGP"],
	  "vendor": "AMD",
	  "performance": 311
	}, {
	  "names": ["Radeon HD 6550A"],
	  "vendor": "AMD",
	  "performance": 708
	}, {
	  "names": ["Radeon HD 6550D", "Radeon HD 6550D IGP", "AMD Radeon HD 6550D"],
	  "vendor": "AMD",
	  "performance": 412
	}, {
	  "names": ["Radeon HD 6570"],
	  "vendor": "AMD",
	  "performance": 499
	}, {
	  "names": ["Radeon HD 6610M"],
	  "vendor": "AMD",
	  "performance": 565
	}, {
	  "names": ["Radeon HD 6620G", "Radeon HD 6620G IGP", "AMD Radeon HD 6620G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 431
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
	  "performance": 735
	}, {
	  "names": ["Radeon HD 6670"],
	  "vendor": "AMD",
	  "performance": 701
	}, {
	  "names": ["Radeon HD 6750"],
	  "vendor": "AMD",
	  "performance": 1088
	}, {
	  "names": ["Radeon HD 6750M", "Radeon HD 6750M Mac Edition"],
	  "vendor": "AMD",
	  "performance": 937
	}, {
	  "names": ["Radeon HD 6770"],
	  "vendor": "AMD",
	  "performance": 1247
	}, {
	  "names": ["Radeon HD 6770M", "AMD Radeon HD 6770M"],
	  "vendor": "AMD",
	  "performance": 964
	}, {
	  "names": ["Radeon HD 6790", "AMD Radeon HD 6790"],
	  "vendor": "AMD",
	  "performance": 1718
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
	  "performance": 157
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
	  "performance": 333
	}, {
	  "names": ["Radeon HD 7450", "Radeon HD 7450 OEM"],
	  "vendor": "AMD",
	  "performance": 230
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
	  "performance": 486
	}, {
	  "names": ["Radeon HD 7470M", "AMD Radeon HD 7470M"],
	  "vendor": "AMD",
	  "performance": 408
	}, {
	  "names": ["Radeon HD 7480D", "Radeon HD 7480D IGP", "AMD Radeon HD 7480D"],
	  "vendor": "AMD",
	  "performance": 297
	}, {
	  "names": ["Radeon HD 7500G", "Radeon HD 7500G IGP", "AMD Radeon HD 7500G + HD 7550M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 303
	}, {
	  "names": ["Radeon HD 7520G", "Radeon HD 7520G IGP", "AMD Radeon HD 7520G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 314
	}, {
	  "names": ["Radeon HD 7540D", "Radeon HD 7540D IGP"],
	  "vendor": "AMD",
	  "performance": 348
	}, {
	  "names": ["Radeon HD 7550M", "AMD Radeon HD 7550M"],
	  "vendor": "AMD",
	  "performance": 465
	}, {
	  "names": ["Radeon HD 7560D", "Radeon HD 7560D IGP", "AMD Radeon HD 7560D"],
	  "vendor": "AMD",
	  "performance": 483
	}, {
	  "names": ["Radeon HD 7570"],
	  "vendor": "AMD",
	  "performance": 648
	}, {
	  "names": ["Radeon HD 7570M", "AMD Radeon HD 7570M"],
	  "vendor": "AMD",
	  "performance": 469
	}, {
	  "names": ["Radeon HD 7600G", "Radeon HD 7600G IGP", "AMD Radeon HD 7600G"],
	  "vendor": "AMD",
	  "performance": 354
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
	  "performance": 455
	}, {
	  "names": ["Radeon HD 7650A"],
	  "vendor": "AMD",
	  "performance": 553
	}, {
	  "names": ["Radeon HD 7650M", "AMD Radeon HD 7650M"],
	  "vendor": "AMD",
	  "performance": 508
	}, {
	  "names": ["Radeon HD 7660D", "Radeon HD 7660D IGP", "AMD Radeon HD 7660D"],
	  "vendor": "AMD",
	  "performance": 515
	}, {
	  "names": ["Radeon HD 7660G", "Radeon HD 7660G IGP", "AMD Radeon HD 7660G + HD 7670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 477
	}, {
	  "names": ["Radeon HD 7670", "Radeon HD 7670 OEM"],
	  "vendor": "AMD",
	  "performance": 873
	}, {
	  "names": ["Radeon HD 7670A"],
	  "vendor": "AMD",
	  "performance": 1050
	}, {
	  "names": ["Radeon HD 7670M", "AMD Radeon HD 7670M"],
	  "vendor": "AMD",
	  "performance": 424
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
	  "performance": 1252
	}, {
	  "names": ["Radeon HD 7730M", "AMD Radeon HD 7730M"],
	  "vendor": "AMD",
	  "performance": 685
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
	  "performance": 2151
	}, {
	  "names": ["Radeon HD 7790"],
	  "vendor": "AMD",
	  "performance": 3090
	}, {
	  "names": ["Radeon HD 7850"],
	  "vendor": "AMD",
	  "performance": 3770
	}, {
	  "names": ["Radeon HD 7850M", "AMD Radeon HD 7850M"],
	  "vendor": "AMD",
	  "performance": 1373
	}, {
	  "names": ["Radeon HD 7870", "Radeon HD 7870 XT", "AMD Radeon HD 7870"],
	  "vendor": "AMD",
	  "performance": 4641
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
	  "performance": 247
	}, {
	  "names": ["Radeon HD 8330E"],
	  "vendor": "AMD",
	  "performance": 241
	}, {
	  "names": ["Radeon HD 8350", "Radeon HD 8350 OEM"],
	  "vendor": "AMD",
	  "performance": 209
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
	  "performance": 273
	}, {
	  "names": ["Radeon HD 8510G", "Radeon HD 8510G IGP", "AMD Radeon HD 8510G"],
	  "vendor": "AMD",
	  "performance": 378
	}, {
	  "names": ["Radeon HD 8550D", "Radeon HD 8550D IGP"],
	  "vendor": "AMD",
	  "performance": 685
	}, {
	  "names": ["Radeon HD 8550G", "Radeon HD 8550G IGP", "AMD Radeon HD 8550G + HD 8750M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 431
	}, {
	  "names": ["Radeon HD 8550G + 7600M Dual", "AMD Radeon HD 8550G + HD 8670M Dual Graphics"],
	  "performance": 901
	}, {
	  "names": ["Radeon HD 8570", "Radeon HD 8570 OEM"],
	  "vendor": "AMD",
	  "performance": 1002
	}, {
	  "names": ["Radeon HD 8570D", "Radeon HD 8570D IGP", "AMD Radeon HD 8570D"],
	  "vendor": "AMD",
	  "performance": 445
	}, {
	  "names": ["Radeon HD 8570M", "AMD Radeon HD 8650G + HD 8570M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 485
	}, {
	  "names": ["Radeon HD 8610G", "Radeon HD 8610G IGP", "AMD Radeon HD 8610G"],
	  "vendor": "AMD",
	  "performance": 442
	}, {
	  "names": ["Radeon HD 8650D", "Radeon HD 8650D IGP"],
	  "vendor": "AMD",
	  "performance": 526
	}, {
	  "names": ["Radeon HD 8650G", "Radeon HD 8650G IGP", "AMD Radeon HD 8650G + HD 8670M Dual Graphics"],
	  "vendor": "AMD",
	  "performance": 515
	}, {
	  "names": ["Radeon HD 8670D", "Radeon HD 8670D IGP", "AMD Radeon HD 8670D"],
	  "vendor": "AMD",
	  "performance": 574
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
	  "performance": 728
	}, {
	  "names": ["Radeon HD 8750M", "AMD Radeon HD 8750M"],
	  "vendor": "AMD",
	  "performance": 863
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
	  "performance": 2066
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
	  "performance": 5658
	}, {
	  "names": ["Radeon Pro 5500M", "AMD Radeon Pro 5500M"],
	  "performance": 6650
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
	  "names": ["Radeon Pro WX 2100"],
	  "vendor": "AMD",
	  "performance": 1612
	}, {
	  "names": ["Radeon Pro WX 3100", "AMD Radeon Pro WX 3100"],
	  "vendor": "AMD",
	  "performance": 2855
	}, {
	  "names": ["Radeon Pro WX 3200", "AMD Radeon Pro WX 3200"],
	  "performance": 2560
	}, {
	  "names": ["Radeon Pro WX 4100"],
	  "vendor": "AMD",
	  "performance": 3758
	}, {
	  "names": ["Radeon Pro WX 4130", "Radeon Pro WX 4130 Mobile", "AMD Radeon Pro WX 4130"],
	  "vendor": "AMD",
	  "performance": 2304
	}, {
	  "names": ["Radeon Pro WX 4150", "Radeon Pro WX 4150 Mobile", "AMD Radeon Pro WX 4150"],
	  "vendor": "AMD",
	  "performance": 1991
	}, {
	  "names": ["Radeon Pro WX 4170", "Radeon Pro WX 4170 Mobile"],
	  "vendor": "AMD",
	  "performance": 1409
	}, {
	  "names": ["Radeon Pro WX 5100"],
	  "vendor": "AMD",
	  "performance": 5329
	}, {
	  "names": ["Radeon Pro WX 7100", "AMD Radeon Pro WX 7100"],
	  "vendor": "AMD",
	  "performance": 7674
	}, {
	  "names": ["Radeon Pro WX 8200"],
	  "vendor": "AMD",
	  "performance": 14137
	}, {
	  "names": ["Radeon Pro WX 9100"],
	  "vendor": "AMD",
	  "performance": 12372
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
	  "performance": 301
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
	  "performance": 368
	}, {
	  "names": ["Radeon R5 240", "Radeon R5 240 OEM"],
	  "vendor": "AMD",
	  "performance": 516
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
	  "performance": 982
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
	  "performance": 384
	}, {
	  "names": ["Radeon R5 M240", "AMD Radeon R5 M240"],
	  "vendor": "AMD",
	  "performance": 432
	}, {
	  "names": ["Radeon R5 M255", "AMD Radeon R5 M255"],
	  "vendor": "AMD",
	  "performance": 589
	}, {
	  "names": ["Radeon R5 M315", "AMD Radeon R5 M315"],
	  "vendor": "AMD",
	  "performance": 495
	}, {
	  "names": ["Radeon R5 M320", "AMD Radeon R5 M320"],
	  "vendor": "AMD",
	  "performance": 428
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
	  "performance": 470
	}, {
	  "names": ["Radeon R5 M430", "AMD Radeon R5 M430"],
	  "vendor": "AMD",
	  "performance": 649
	}, {
	  "names": ["Radeon R5 M435"],
	  "vendor": "AMD",
	  "performance": 896
	}, {
	  "names": ["Radeon R6", "Radeon R6 Graphics", "AMD Radeon R6 (Carrizo)"],
	  "vendor": "AMD",
	  "performance": 572
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
	  "performance": 1192
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
	  "performance": 3066
	}, {
	  "names": ["Radeon R7 340", "Radeon R7 340 OEM"],
	  "vendor": "AMD",
	  "performance": 931
	}, {
	  "names": ["Radeon R7 360"],
	  "vendor": "AMD",
	  "performance": 3099
	}, {
	  "names": ["Radeon R7 370", "AMD Radeon R7 370"],
	  "vendor": "AMD",
	  "performance": 4418
	}, {
	  "names": ["Radeon R7 430", "Radeon R7 430 OEM"],
	  "vendor": "AMD",
	  "performance": 1215
	}, {
	  "names": ["Radeon R7 450", "Radeon R7 450 OEM"],
	  "vendor": "AMD",
	  "performance": 1918
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
	  "performance": 438
	}, {
	  "names": ["Radeon R7 M260DX"],
	  "vendor": "AMD",
	  "performance": 811
	}, {
	  "names": ["Radeon R7 M260X", "AMD Radeon R7 M260X"],
	  "vendor": "AMD",
	  "performance": 1013
	}, {
	  "names": ["Radeon R7 M265", "AMD Radeon R7 M265"],
	  "vendor": "AMD",
	  "performance": 813
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
	  "performance": 636
	}, {
	  "names": ["Radeon R7 M350"],
	  "vendor": "AMD",
	  "performance": 1025
	}, {
	  "names": ["Radeon R7 M360", "AMD Radeon R7 M360"],
	  "vendor": "AMD",
	  "performance": 539
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
	  "performance": 883
	}, {
	  "names": ["Radeon R7 M445", "AMD Radeon R7 M445"],
	  "vendor": "AMD",
	  "performance": 922
	}, {
	  "names": ["Radeon R7 M460", "AMD Radeon R7 M460"],
	  "vendor": "AMD",
	  "performance": 1009
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
	  "performance": 1268
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
	  "performance": 4823
	}, {
	  "names": ["Radeon R9 280"],
	  "vendor": "AMD",
	  "performance": 5550
	}, {
	  "names": ["Radeon R9 280X", "AMD Radeon R9 280X"],
	  "vendor": "AMD",
	  "performance": 6248
	}, {
	  "names": ["Radeon R9 285", "380", "Radeon R9 285"],
	  "vendor": "AMD",
	  "performance": 5550
	}, {
	  "names": ["Radeon R9 290"],
	  "vendor": "AMD",
	  "performance": 8277
	}, {
	  "names": ["Radeon R9 290X", "AMD Radeon R9 290X"],
	  "vendor": "AMD",
	  "performance": 8548
	}, {
	  "names": ["Radeon R9 295X2"],
	  "vendor": "AMD",
	  "performance": 8311
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
	  "performance": 6141
	}, {
	  "names": ["Radeon R9 380X"],
	  "vendor": "AMD",
	  "performance": 6015
	}, {
	  "names": ["Radeon R9 390"],
	  "vendor": "AMD",
	  "performance": 8731
	}, {
	  "names": ["Radeon R9 390X", "AMD Radeon R9 390X"],
	  "vendor": "AMD",
	  "performance": 9571
	}, {
	  "names": ["Radeon R9 A375"],
	  "vendor": "AMD",
	  "performance": 1024
	}, {
	  "names": ["Radeon R9 Fury", "Radeon R9 FURY", "AMD Radeon R9 Fury"],
	  "vendor": "AMD",
	  "performance": 9571
	}, {
	  "names": ["Radeon R9 Fury + Fury X", "Radeon R9 FURY X"],
	  "vendor": "AMD",
	  "performance": 9741
	}, {
	  "names": ["Radeon R9 M265X", "AMD Radeon R9 M265X"],
	  "vendor": "AMD",
	  "performance": 933
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
	  "performance": 3327
	}, {
	  "names": ["Radeon R9 M295X", "AMD Radeon R9 M295X"],
	  "vendor": "AMD",
	  "performance": 5150
	}, {
	  "names": ["Radeon R9 M360"],
	  "vendor": "AMD",
	  "performance": 1772
	}, {
	  "names": ["Radeon R9 M365X", "AMD Radeon R9 M365X"],
	  "vendor": "AMD",
	  "performance": 1482
	}, {
	  "names": ["Radeon R9 M370X", "Radeon R9 M370X Mac Edition", "AMD Radeon R9 M370X"],
	  "vendor": "AMD",
	  "performance": 1351
	}, {
	  "names": ["Radeon R9 M375", "AMD Radeon R9 M375"],
	  "vendor": "AMD",
	  "performance": 979
	}, {
	  "names": ["Radeon R9 M375X"],
	  "vendor": "AMD",
	  "performance": 1962
	}, {
	  "names": ["Radeon R9 M380", "AMD Radeon R9 M380"],
	  "vendor": "AMD",
	  "performance": 3051
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
	  "performance": 4954
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
	  "performance": 4042
	}, {
	  "names": ["Radeon RX 470", "AMD Radeon RX 470 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 7918
	}, {
	  "names": ["Radeon RX 480", "AMD Radeon RX 480 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8509
	}, {
	  "names": ["Radeon RX 550", "AMD Radeon RX 550 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 2436
	}, {
	  "names": ["Radeon RX 5500M", "AMD Radeon RX 5500M"],
	  "performance": 4153
	}, {
	  "names": ["Radeon RX 550X"],
	  "vendor": "AMD",
	  "performance": 1751
	}, {
	  "names": ["Radeon RX 560", "AMD Radeon RX 560 (Laptop)"],
	  "vendor": "AMD",
	  "performance": 3646
	}, {
	  "names": ["Radeon RX 5600", "AMD Radeon RX 5600 XT (Desktop)"],
	  "performance": 10533
	}, {
	  "names": ["Radeon RX 5600M", "AMD Radeon RX 5600M"],
	  "performance": 6292
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
	  "performance": 14453
	}, {
	  "names": ["Radeon RX 5700 XT", "AMD Radeon RX 5700 XT (Desktop)"],
	  "performance": 16659
	}, {
	  "names": ["Radeon RX 570X", "AMD Radeon RX 570X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 1923
	}, {
	  "names": ["Radeon RX 580", "AMD Radeon RX 580 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 8753
	}, {
	  "names": ["Radeon RX 580 2048SP"],
	  "vendor": "AMD",
	  "performance": 7744
	}, {
	  "names": ["Radeon RX 580X", "AMD Radeon RX 580X (Laptop)"],
	  "vendor": "AMD",
	  "performance": 7798
	}, {
	  "names": ["Radeon RX 590", "AMD Radeon RX 590 (Desktop)"],
	  "vendor": "AMD",
	  "performance": 9482
	}, {
	  "names": ["Radeon RX 640", "AMD Radeon RX 640"],
	  "performance": 1229
	}, {
	  "names": ["Radeon RX Vega 10", "Radeon RX Vega 10 Mobile", "AMD Radeon RX Vega 10"],
	  "vendor": "AMD",
	  "performance": 1518
	}, {
	  "names": ["Radeon RX Vega 11", "AMD Radeon RX Vega 11"],
	  "vendor": "AMD",
	  "performance": 2117
	}, {
	  "names": ["Radeon RX Vega 11 PRD", "Radeon RX Vega 11 Efficient"],
	  "vendor": "AMD",
	  "performance": 2402
	}, {
	  "names": ["Radeon RX Vega 56", "AMD Radeon RX Vega 56"],
	  "vendor": "AMD",
	  "performance": 13326
	}, {
	  "names": ["Radeon RX Vega 64", "AMD Radeon RX Vega 64"],
	  "vendor": "AMD",
	  "performance": 14646
	}, {
	  "names": ["Radeon RX Vega 8", "Radeon Vega 8"],
	  "vendor": "AMD",
	  "performance": 1586
	}, {
	  "names": ["Radeon RX Vega M GH", "AMD Radeon RX Vega M GH"],
	  "vendor": "AMD",
	  "performance": 6770
	}, {
	  "names": ["Radeon RX Vega M GL"],
	  "vendor": "AMD",
	  "performance": 3600
	}, {
	  "names": ["Radeon Sky 500"],
	  "vendor": "AMD",
	  "performance": 4889
	}, {
	  "names": ["Radeon Vega 11", "Radeon Vega 11 Embedded"],
	  "vendor": "AMD",
	  "performance": 1903
	}, {
	  "names": ["Radeon Vega 2", "AMD Radeon RX Vega 2"],
	  "performance": 425
	}, {
	  "names": ["Radeon Vega 3", "Radeon Vega 3 Embedded", "AMD Radeon RX Vega 3"],
	  "vendor": "AMD",
	  "performance": 905
	}, {
	  "names": ["Radeon Vega 3 Mobile"],
	  "vendor": "AMD",
	  "performance": 1064
	}, {
	  "names": ["Radeon Vega 6", "Radeon Vega 6 Mobile"],
	  "vendor": "AMD",
	  "performance": 1218
	}, {
	  "names": ["Radeon Vega 8", "Radeon Vega 8 Embedded"],
	  "vendor": "AMD",
	  "performance": 1571
	}, {
	  "names": ["Radeon Vega 9", "AMD Radeon RX Vega 9"],
	  "performance": 1663
	}, {
	  "names": ["Radeon Vega Frontier Edition"],
	  "vendor": "AMD",
	  "performance": 14072
	}, {
	  "names": ["Radeon VII"],
	  "vendor": "AMD",
	  "performance": 16883
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
	  "performance": 19092
	}, {
	  "names": ["TITAN V"],
	  "vendor": "NVIDIA",
	  "performance": 19177
	}, {
	  "names": ["TITAN V CEO Edition"],
	  "vendor": "NVIDIA",
	  "performance": 16988
	}, {
	  "names": ["Radeon R9 Nano", "AMD Radeon R9 Nano"],
	  "vendor": "AMD",
	  "performance": 8185
	}, {
	  "names": ["Radeon HD 6450M", "AMD Radeon HD 6450M"],
	  "vendor": "AMD",
	  "performance": 589
	}, {
	  "names": ["Radeon HD 6730M", "AMD Radeon HD 6730M"],
	  "vendor": "AMD",
	  "performance": 1024
	}, {
	  "names": ["Radeon HD 6850M", "AMD Radeon HD 6850M"],
	  "vendor": "AMD",
	  "performance": 1090
	}, {
	  "names": ["Radeon HD 6870M", "AMD Radeon HD 6870M"],
	  "vendor": "AMD",
	  "performance": 1631
	}, {
	  "names": ["Radeon HD 6950M", "AMD Radeon HD 6950M"],
	  "vendor": "AMD",
	  "performance": 1469
	}, {
	  "names": ["Radeon HD 6990M", "AMD Radeon HD 6990M"],
	  "vendor": "AMD",
	  "performance": 1981
	}, {
	  "names": ["Radeon HD 7770M", "AMD Radeon HD 7770M"],
	  "vendor": "AMD",
	  "performance": 1359
	}, {
	  "names": ["Radeon HD 8550M", "AMD Radeon HD 8550M"],
	  "vendor": "AMD",
	  "performance": 624
	}, {
	  "names": ["Radeon HD 8770M", "AMD Radeon HD 8770M"],
	  "vendor": "AMD",
	  "performance": 1431
	}, {
	  "names": ["FirePro M8900", "AMD FirePro M8900"],
	  "vendor": "AMD",
	  "performance": 1892
	}, {
	  "names": ["Radeon R6 M340DX", "AMD Radeon R6 M340DX"],
	  "vendor": "AMD",
	  "performance": 1052
	}, {
	  "names": ["HD Graphics 2500", "Intel HD Graphics 2500"],
	  "vendor": "Intel",
	  "performance": 421
	}, {
	  "names": ["HD Graphics 400", "Intel HD Graphics 400 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 306
	}, {
	  "names": ["HD Graphics 405", "Intel HD Graphics 405 (Braswell)"],
	  "vendor": "Intel",
	  "performance": 390
	}, {
	  "names": ["HD Graphics 4200", "Intel HD Graphics 4200"],
	  "vendor": "Intel",
	  "performance": 538
	}, {
	  "names": ["Tegra 3", "NVIDIA GeForce ULP (Tegra 3)"],
	  "vendor": "NVIDIA",
	  "performance": 61
	}, {
	  "names": ["Tegra 4", "NVIDIA GeForce Tegra 4"],
	  "vendor": "NVIDIA",
	  "performance": 271
	}, {
	  "names": ["Tegra K1", "NVIDIA Tegra K1 Kepler GPU"],
	  "vendor": "NVIDIA",
	  "performance": 692
	}, {
	  "names": ["Tegra X1", "NVIDIA Tegra X1 Maxwell GPU"],
	  "vendor": "NVIDIA",
	  "performance": 1100
	}, {
	  "names": ["NVIDIA GeForce RTX 2080 Super (Desktop)"],
	  "performance": 17068
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 SLI (Laptop)"],
	  "performance": 16445
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Desktop)"],
	  "performance": 16718
	}, {
	  "names": ["NVIDIA GeForce GTX 1070 SLI (Laptop)"],
	  "performance": 16216
	}, {
	  "names": ["NVIDIA GeForce RTX 2070 Super (Desktop)"],
	  "performance": 13844
	}, {
	  "names": ["NVIDIA GeForce GTX 1080 (Desktop)"],
	  "performance": 11056
	}, {
	  "names": ["NVIDIA GeForce GTX 980 SLI (Laptop)"],
	  "performance": 11349
	}, {
	  "names": ["NVIDIA GeForce GTX 1660 (Desktop)"],
	  "performance": 10135
	}, {
	  "names": ["NVIDIA GeForce GTX 980M SLI"],
	  "performance": 8728
	}, {
	  "names": ["NVIDIA GeForce GTX 980 (Laptop)"],
	  "performance": 7293
	}, {
	  "names": ["NVIDIA GeForce GTX 970M SLI"],
	  "performance": 7108
	}, {
	  "names": ["AMD Radeon RX 580 (Laptop)"],
	  "performance": 6144
	}, {
	  "names": ["AMD Radeon RX 5300M"],
	  "performance": 6899
	}, {
	  "names": ["NVIDIA GeForce GTX 1650 (Desktop)"],
	  "performance": 7298
	}, {
	  "names": ["AMD Radeon RX 480 (Laptop)"],
	  "performance": 3517
	}, {
	  "names": ["AMD Radeon RX 470 (Laptop)"],
	  "performance": 7461
	}, {
	  "names": ["NVIDIA GeForce GTX 880M SLI"],
	  "performance": 6971
	}, {
	  "names": ["NVIDIA GeForce GTX 780M SLI"],
	  "performance": 6221
	}, {
	  "names": ["NVIDIA GeForce GTX 965M SLI"],
	  "performance": 5583
	}, {
	  "names": ["AMD Radeon R9 M290X Crossfire"],
	  "performance": 6245
	}, {
	  "names": ["AMD Radeon HD 8970M Crossfire"],
	  "performance": 5912
	}, {
	  "names": ["NVIDIA GeForce GTX 680M SLI"],
	  "performance": 5105
	}, {
	  "names": ["AMD Radeon HD 7970M Crossfire"],
	  "performance": 4350
	}, {
	  "names": ["NVIDIA GeForce GTX 860M SLI"],
	  "performance": 4388
	}, {
	  "names": ["AMD Radeon HD 7970"],
	  "performance": 4047
	}, {
	  "names": ["AMD Radeon RX Vega M GL", "870"],
	  "performance": 4394
	}, {
	  "names": ["NVIDIA GeForce GTX 1050 (Desktop)"],
	  "performance": 4882
	}, {
	  "names": ["NVIDIA GeForce GTX 675M SLI"],
	  "performance": 3241
	}, {
	  "names": ["NVIDIA GeForce GTX 765M SLI"],
	  "performance": 3696
	}, {
	  "names": ["AMD Radeon RX 460 (Laptop)"],
	  "performance": 3021
	}, {
	  "names": ["AMD Radeon R9 M390"],
	  "performance": 3666
	}, {
	  "names": ["NVIDIA GeForce GTX 670MX SLI"],
	  "performance": 3479
	}, {
	  "names": ["NVIDIA GeForce GTX 580M SLI"],
	  "performance": 2624
	}, {
	  "names": ["AMD Radeon HD 6990M Crossfire"],
	  "performance": 3186
	}, {
	  "names": ["NVIDIA GeForce GT 755M SLI"],
	  "performance": 2893
	}, {
	  "names": ["NVIDIA GeForce GTX 485M SLI"],
	  "performance": 2820
	}, {
	  "names": ["AMD Radeon HD 6970M Crossfire"],
	  "performance": 3028
	}, {
	  "names": ["NVIDIA GeForce GT 750M SLI"],
	  "performance": 2478
	}, {
	  "names": ["NVIDIA GeForce GTX 560M SLI"],
	  "performance": 2327
	}, {
	  "names": ["NVIDIA GeForce GT 650M SLI"],
	  "performance": 1929
	}, {
	  "names": ["NVIDIA Maxwell GPU Surface Book"],
	  "performance": 1753
	}, {
	  "names": ["AMD Radeon RX Vega 8 (Ryzen 4000)"],
	  "performance": 3214
	}, {
	  "names": ["AMD Radeon RX Vega 7"],
	  "performance": 2520
	}, {
	  "names": ["Intel Iris Plus Graphics G4 (Ice Lake 48 EU)"],
	  "performance": 1925
	}, {
	  "names": ["Apple A12Z Bionic GPU"],
	  "performance": 5493
	}, {
	  "names": ["Apple A12X Bionic GPU"],
	  "performance": 4649
	}, {
	  "names": ["AMD Radeon R7 M275DX"],
	  "performance": 1444
	}, {
	  "names": ["AMD Radeon R7 512 Cores (Kaveri Desktop)"],
	  "performance": 1333
	}, {
	  "names": ["AMD Radeon R7 384 Cores (Kaveri Desktop)"],
	  "performance": 1292
	}, {
	  "names": ["AMD Radeon RX Vega 6 (Ryzen 4000)"],
	  "performance": 2260
	}, {
	  "names": ["Apple A13 Bionic GPU"],
	  "performance": 3670
	}, {
	  "names": ["Apple A12 Bionic GPU"],
	  "performance": 2847
	}, {
	  "names": ["Qualcomm Adreno 650"],
	  "performance": 2709
	}, {
	  "names": ["Apple A11 Bionic GPU"],
	  "performance": 1839
	}, {
	  "names": ["Apple A10X Fusion GPU", "PowerVR"],
	  "performance": 2328
	}, {
	  "names": ["AMD Radeon R7 (Bristol Ridge)"],
	  "performance": 873
	}, {
	  "names": ["AMD Radeon R7 (Carrizo)"],
	  "performance": 996
	}, {
	  "names": ["AMD Radeon R7 (Kaveri)"],
	  "performance": 964
	}, {
	  "names": ["Apple A9X", "PowerVR Series 7XT"],
	  "performance": 1441
	}, {
	  "names": ["AMD Radeon RX Vega 6 (Ryzen 2000", "3000)"],
	  "performance": 1670
	}, {
	  "names": ["AMD Radeon RX Vega 5"],
	  "performance": 1869
	}, {
	  "names": ["Intel UHD Graphics G1 (Ice Lake 32 EU)"],
	  "performance": 1547
	}, {
	  "names": ["Intel UHD Graphics G7 (Lakefield GT2 64 EU)"],
	  "performance": 1074
	}, {
	  "names": ["AMD Radeon R5 (Bristol Ridge)"],
	  "performance": 1020
	}, {
	  "names": ["Qualcomm Adreno 680"],
	  "performance": 994
	}, {
	  "names": ["AMD Radeon R6 (Kaveri)"],
	  "performance": 710
	}, {
	  "names": ["AMD Radeon HD 8650M"],
	  "performance": 793
	}, {
	  "names": ["AMD Radeon HD 6755G2"],
	  "performance": 805
	}, {
	  "names": ["AMD Radeon HD 6740G2"],
	  "performance": 890
	}, {
	  "names": ["AMD Radeon HD 8650G"],
	  "performance": 892
	}, {
	  "names": ["AMD Radeon R5 (Stoney Ridge)"],
	  "performance": 664
	}, {
	  "names": ["Apple A10 Fusion GPU", "PowerVR"],
	  "performance": 1295
	}, {
	  "names": ["AMD Radeon HD 6720G2"],
	  "performance": 761
	}, {
	  "names": ["AMD Radeon HD 8570M"],
	  "performance": 760
	}, {
	  "names": ["ARM Mali-G77 MP11"],
	  "performance": 2153
	}, {
	  "names": ["ARM Mali-G76 MP16"],
	  "performance": 1765
	}, {
	  "names": ["Qualcomm Adreno 640"],
	  "performance": 2084
	}, {
	  "names": ["ARM Mali-G76 MP12"],
	  "performance": 1554
	}, {
	  "names": ["ARM Mali-G76 MP10"],
	  "performance": 1371
	}, {
	  "names": ["ARM Mali-G57 MP6"],
	  "performance": 1342
	}, {
	  "names": ["ARM Mali-G57 MP5"],
	  "performance": 1282
	}, {
	  "names": ["Qualcomm Adreno 540"],
	  "performance": 748
	}, {
	  "names": ["ARM Mali-G72 MP18"],
	  "performance": 1371
	}, {
	  "names": ["ARM Mali-G71 MP20"],
	  "performance": 990
	}, {
	  "names": ["ARM Mali-G72 MP12"],
	  "performance": 941
	}, {
	  "names": ["ARM Mali-G71 MP8"],
	  "performance": 746
	}, {
	  "names": ["AMD Radeon R5 (Carrizo)"],
	  "performance": 901
	}, {
	  "names": ["AMD Radeon R5 (Kaveri)"],
	  "performance": 534
	}, {
	  "names": ["AMD Radeon HD 7660G"],
	  "performance": 852
	}, {
	  "names": ["AMD Radeon HD 6680G2"],
	  "performance": 680
	}, {
	  "names": ["AMD Radeon HD 8550G"],
	  "performance": 814
	}, {
	  "names": ["AMD Radeon HD 7610M"],
	  "performance": 749
	}, {
	  "names": ["AMD Radeon HD 7640G"],
	  "performance": 544
	}, {
	  "names": ["PowerVR GM9446"],
	  "performance": 592
	}, {
	  "names": ["Qualcomm Adreno 530"],
	  "performance": 824
	}, {
	  "names": ["PowerVR GXA6850"],
	  "performance": 692
	}, {
	  "names": ["Apple A9", "PowerVR GT7600"],
	  "performance": 881
	}, {
	  "names": ["ARM Mali-T880 MP12"],
	  "performance": 777
	}, {
	  "names": ["ARM Mali-G76 MP4"],
	  "performance": 918
	}, {
	  "names": ["ARM Mali-T760 MP8"],
	  "performance": 547
	}, {
	  "names": ["ARM Mali-G71 MP2"],
	  "performance": 231
	}, {
	  "names": ["AMD Radeon HD 6620G"],
	  "performance": 466
	}, {
	  "names": ["AMD Radeon R4 (Stoney Ridge)"],
	  "performance": 538
	}, {
	  "names": ["Qualcomm Adreno 430"],
	  "performance": 568
	}, {
	  "names": ["AMD Radeon R5 (Beema", "Carrizo-L)"],
	  "performance": 526
	}, {
	  "names": ["AMD Radeon R4 (Kaveri)"],
	  "performance": 423
	}, {
	  "names": ["AMD Radeon HD 6540G2"],
	  "performance": 612
	}, {
	  "names": ["AMD Radeon HD 7500G"],
	  "performance": 456
	}, {
	  "names": ["AMD Radeon HD 8450G"],
	  "performance": 557
	}, {
	  "names": ["ARM Mali-G72 MP3"],
	  "performance": 423
	}, {
	  "names": ["ARM Mali-T880 MP4"],
	  "performance": 400
	}, {
	  "names": ["ARM Mali-G52 MP6"],
	  "performance": 1008
	}, {
	  "names": ["ARM Mali-G52 MP2"],
	  "performance": 458
	}, {
	  "names": ["ARM Mali-G52 MP1"],
	  "performance": 273
	}, {
	  "names": ["AMD Radeon HD 7520G"],
	  "performance": 495
	}, {
	  "names": ["AMD Radeon HD 6510G2"],
	  "performance": 533
	}, {
	  "names": ["AMD Radeon HD 7450M"],
	  "performance": 518
	}, {
	  "names": ["ARM Mali-T760 MP6"],
	  "performance": 373
	}, {
	  "names": ["ARM Mali-T880 MP2"],
	  "performance": 261
	}, {
	  "names": ["Intel HD Graphics (Braswell)"],
	  "performance": 298
	}, {
	  "names": ["PowerVR GX6450"],
	  "performance": 454
	}, {
	  "names": ["Qualcomm Adreno 420"],
	  "performance": 462
	}, {
	  "names": ["Qualcomm Adreno 620"],
	  "performance": 1223
	}, {
	  "names": ["Intel HD Graphics (Haswell)"],
	  "performance": 499
	}, {
	  "names": ["AMD Radeon HD 6520G"],
	  "performance": 454
	}, {
	  "names": ["AMD Radeon HD 6480G"],
	  "performance": 391
	}, {
	  "names": ["Qualcomm Adreno 418"],
	  "performance": 379
	}, {
	  "names": ["Qualcomm Adreno 618"],
	  "performance": 968
	}, {
	  "names": ["Qualcomm Adreno 616"],
	  "performance": 734
	}, {
	  "names": ["AMD Radeon R2 (Mullins", "Beema", "Carrizo-L)"],
	  "performance": 312
	}, {
	  "names": ["ARM Mali-G51 MP4"],
	  "performance": 443
	}, {
	  "names": ["AMD Radeon R6 (Mullins)"],
	  "performance": 336
	}, {
	  "names": ["Intel HD Graphics (Cherry Trail)"],
	  "performance": 285
	}, {
	  "names": ["Intel HD Graphics (Ivy Bridge)"],
	  "performance": 292
	}, {
	  "names": ["Intel HD Graphics (Sandy Bridge)"],
	  "performance": 308
	}, {
	  "names": ["Qualcomm Adreno 612"],
	  "performance": 480
	}, {
	  "names": ["Qualcomm Adreno 610"],
	  "performance": 438
	}, {
	  "names": ["Qualcomm Adreno 512"],
	  "performance": 535
	}, {
	  "names": ["Qualcomm Adreno 510"],
	  "performance": 371
	}, {
	  "names": ["Qualcomm Adreno 330"],
	  "performance": 323
	}, {
	  "names": ["PowerVR G6430"],
	  "performance": 293
	}, {
	  "names": ["PowerVR GX6250"],
	  "performance": 276
	}, {
	  "names": ["PowerVR G6400"],
	  "performance": 266
	}, {
	  "names": ["Intel HD Graphics (Bay Trail)"],
	  "performance": 191
	}, {
	  "names": ["ARM Mali-T628 MP6"],
	  "performance": 240
	}, {
	  "names": ["ARM Mali-T760 MP4"],
	  "performance": 170
	}, {
	  "names": ["PowerVR SGX554MP4"],
	  "performance": 187
	}, {
	  "names": ["ARM Mali-T628 MP4"],
	  "performance": 188
	}, {
	  "names": ["Qualcomm Adreno 509"],
	  "performance": 376
	}, {
	  "names": ["Qualcomm Adreno 508"],
	  "performance": 333
	}, {
	  "names": ["Qualcomm Adreno 506"],
	  "performance": 260
	}, {
	  "names": ["PowerVR GE8322", "IMG8322"],
	  "performance": 190
	}, {
	  "names": ["Qualcomm Adreno 505"],
	  "performance": 196
	}, {
	  "names": ["Qualcomm Adreno 504"],
	  "performance": 118
	}, {
	  "names": ["ARM Mali-T860 MP2"],
	  "performance": 180
	}, {
	  "names": ["ARM Mali-T830 MP3"],
	  "performance": 312
	}, {
	  "names": ["ARM Mali-T604 MP4"],
	  "performance": 115
	}, {
	  "names": ["PowerVR G6200"],
	  "performance": 145
	}, {
	  "names": ["Qualcomm Adreno 405"],
	  "performance": 147
	}, {
	  "names": ["ARM Mali-T830 MP2"],
	  "performance": 207
	}, {
	  "names": ["ARM Mali-T624"],
	  "performance": 158
	}, {
	  "names": ["Qualcomm Adreno 320"],
	  "performance": 163
	}, {
	  "names": ["ARM Mali-T760 MP2"],
	  "performance": 149
	}, {
	  "names": ["PowerVR GE8320"],
	  "performance": 213
	}, {
	  "names": ["PowerVR GE8300"],
	  "performance": 147
	}, {
	  "names": ["PowerVR GE8100"],
	  "performance": 63
	}, {
	  "names": ["ARM Mali-T720 MP4"],
	  "performance": 111
	}, {
	  "names": ["ARM Mali-450 MP4"],
	  "performance": 120
	}, {
	  "names": ["ARM Mali-T830 MP1"],
	  "performance": 126
	}, {
	  "names": ["ARM Mali-T720 MP2"],
	  "performance": 96
	}, {
	  "names": ["Qualcomm Adreno 308"],
	  "performance": 91
	}, {
	  "names": ["Qualcomm Adreno 306"],
	  "performance": 60
	}, {
	  "names": ["Qualcomm Adreno 305"],
	  "performance": 61
	}, {
	  "names": ["Qualcomm Adreno 304"],
	  "performance": 64
	}, {
	  "names": ["ARM Mali-T720"],
	  "performance": 55
	}, {
	  "names": ["Vivante GC7000UL"],
	  "performance": 46
	}, {
	  "names": ["Qualcomm Adreno 302"],
	  "performance": 38
	}, {
	  "names": ["Qualcomm Adreno 225"],
	  "performance": 87
	}, {
	  "names": ["Vivante GC4000"],
	  "performance": 38
	}, {
	  "names": ["Vivante GC1000+ Dual-Core"],
	  "performance": 42
	}, {
	  "names": ["Qualcomm Adreno 203"],
	  "performance": 33
	}];

	exports.database = database;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=database.js.map
@rem **********************************************
@rem       Proceso Puesta en produccion
@rem       Creado por: HITSS
@rem       fecha: 21/09/2019
@rem       Brief: 33881
@rem **********************************************
 
net use "\\172.22.4.47\PPPoliedros"
net use "\\172.22.4.47\BACKUPPPP" 

@REM SERVER APLICATION 
net use "\\172.22.85.65\d$" 
net use "\\172.22.85.35\d$" 
net use "\\172.22.85.36\d$" 
net use "\\172.22.85.93\d$" 
net use "\\172.23.92.118\d$" 
 
@Echo Se ha INICIADO el proceso de PAP del cambio Brief 33881 - ReserverWeb 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS02::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWeb*.*" "\\172.22.85.65\d$\inetpub\wwwreplacement\ReserverWeb" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS03::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWeb*.*" "\\172.22.85.35\d$\inetpub\wwwreplacement\ReserverWeb" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS04::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWeb*.*" "\\172.22.85.36\d$\inetpub\wwwreplacement\ReserverWeb" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS05::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWeb*.*" "\\172.22.85.93\d$\inetpub\wwwreplacement\ReserverWeb" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS06::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWeb*.*" "\\172.23.92.118\d$\inetpub\wwwreplacement\ReserverWeb" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWeb.txt 

@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief 33881 - ReserverWeb 


@Echo Se ha INICIADO el proceso de PAP del cambio Brief 33881 - ReserverWebVD 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS02::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWebVD*.*" "\\172.22.85.65\d$\inetpub\wwwreplacement\ReserverWebVD" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS03::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWebVD*.*" "\\172.22.85.35\d$\inetpub\wwwreplacement\ReserverWebVD" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS04::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWebVD*.*" "\\172.22.85.36\d$\inetpub\wwwreplacement\ReserverWebVD" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS05::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWebVD*.*" "\\172.22.85.93\d$\inetpub\wwwreplacement\ReserverWebVD" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS06::%date:~0,15%  %time:~0,8% *********** >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 
XCOPY "\\172.44.2.43\PPOLIEDROS\33881\Presentacion\ReserverWebVD*.*" "\\172.23.92.118\d$\inetpub\wwwreplacement\ReserverWebVD" /H /K /E /R /Y /F /I >> \\172.44.2.43\PPOLIEDROS\33881\Logs\PAP_svr_ReserverWebVD.txt 

@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief 33881 - ReserverWebVD 

 

 PAUSE
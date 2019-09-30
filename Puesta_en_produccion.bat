@rem **********************************************
@rem       Proceso Puesta en produccion
@rem       Creado por: HITSS
@rem       fecha: 27/09/2019
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
 
@Echo Se ha INICIADO el proceso de PAP del cambio Brief 33881 - ServiceReserver 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS02::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Servicios\Comcel.Repos.Wcf.Reserver\*.*" "\\172.22.85.65\d$\inetpub\wwwrootReplacement\Comcel.Repos.Wcf.Reserver" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS03::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Servicios\Comcel.Repos.Wcf.Reserver\*.*" "\\172.22.85.35\d$\inetpub\wwwrootReplacement\Comcel.Repos.Wcf.Reserver" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS04::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Servicios\Comcel.Repos.Wcf.Reserver\*.*" "\\172.22.85.36\d$\inetpub\wwwrootReplacement\Comcel.Repos.Wcf.Reserver" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS05::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Servicios\Comcel.Repos.Wcf.Reserver\*.*" "\\172.22.85.93\d$\inetpub\wwwrootReplacement\Comcel.Repos.Wcf.Reserver" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS06::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Servicios\Comcel.Repos.Wcf.Reserver\*.*" "\\172.23.92.118\d$\inetpub\wwwrootReplacement\Comcel.Repos.Wcf.Reserver" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceReserver.txt 

@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief 33881 - ServiceReserver 


@Echo Se ha INICIADO el proceso de PAP del cambio Brief 33881 - ServiceValidator 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS02::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Implementacion\Comcel.Pol.WCF.Host.Validadtion\*.*" "\\172.22.85.65\d$\inetpub\wwwrootValidation\Comcel.Pol.WCF.Host.Validation" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS03::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Implementacion\Comcel.Pol.WCF.Host.Validadtion\*.*" "\\172.22.85.35\d$\inetpub\wwwrootValidation\Comcel.Pol.WCF.Host.Validation" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS04::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Implementacion\Comcel.Pol.WCF.Host.Validadtion\*.*" "\\172.22.85.36\d$\inetpub\wwwrootValidation\Comcel.Pol.WCF.Host.Validation" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS05::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Implementacion\Comcel.Pol.WCF.Host.Validadtion\*.*" "\\172.22.85.93\d$\inetpub\wwwrootValidation\Comcel.Pol.WCF.Host.Validation" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 

@Echo *******COMIENZA LA EJECUCION DEL BAT PAP::SERVIDOR_WPOLPS06::%date:~0,15%  %time:~0,8% *********** >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 
XCOPY "\\172.22.4.47\PPPoliedros\HITSS\B33881\Implementacion\Comcel.Pol.WCF.Host.Validadtion\*.*" "\\172.23.92.118\d$\inetpub\wwwrootValidation\Comcel.Pol.WCF.Host.Validation" /H /K /E /R /Y /F /I >> \\172.22.4.47\PPPoliedros\HITSS\B33881\Logs\PAP_svr_ServiceValidator.txt 

@Echo Se ha FINALIZADO el proceso de PAP del cambio Brief 33881 - ServiceValidator 

   

 PAUSE
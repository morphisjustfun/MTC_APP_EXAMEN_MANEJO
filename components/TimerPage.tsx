import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {TimerPageProps} from '../types/TimerPage';
import {containerStyles, textStyles} from '../styles/TimerPage';
import {colors} from '../utils/colors';
import ButtonTimer from '../utils/components/ButtonTimer';
import {getConvertedTimer} from '../utils/utils';
import CustomText from '../utils/components/CustomText';
import {ExternalSensor} from '../utils/requests/externalSensors';
import {CustomButton} from '../utils/components/Button';
import LogoTopBar from '../utils/components/LogoTopBar';
import {topBarStyles} from '../styles/App';
import {buttonStyles} from '../styles/UserInfoPage';
import {MultipleSelectPicker} from 'react-native-multi-select-picker';
import {StyleSheet, ScrollView} from 'react-native';

const getFormattedDate = () => {
  const originalDate = new Date();

  const formattedDate =
    originalDate.getFullYear() +
    '-' +
    (originalDate.getMonth() + 1) +
    '-' +
    originalDate.getDate() +
    '-' +
    originalDate.getHours() +
    '-' +
    originalDate.getMinutes() +
    '-' +
    originalDate.getSeconds();

  return formattedDate;
};

const TimerPage: NavigationFunctionComponent<TimerPageProps> = _props => {
  // initial | running  | done
  const [counterDec, setCounterDec] = React.useState(0);
  const [state, setState] = React.useState<'initial' | 'running' | 'done'>(
    'initial',
  );

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const [isShownPicker, setIsShownPicker] = React.useState(false);

  React.useEffect(() => {
    if (state === 'running') {
      setTimeout(() => {
        setCounterDec(counterDec + 1);
      }, 1000);
    }
  }, [counterDec, state]);

  const startTime = React.useRef<undefined | Date>(undefined);

  const actualDate =
    startTime.current === undefined
      ? undefined
      : Math.ceil(
          Math.abs(new Date().getTime() - startTime.current.getTime()) / 1000,
        );

  const callbackStop = async () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    if (state === 'initial') {
      setState('running');
      startTime.current = new Date();

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'grabar',
          fechaHora: getFormattedDate().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
    if (state === 'running') {
      setState('done');

      try {
        await ExternalSensor.publish({
          codigoEquipo: 2123,
          token: randomString,
          action: 'detener',
          fechaHora: new Date().toString(),
          correlativo: 'no se que viene',
          entidad: {
            codigo: 2132,
            nombre: 'Turin',
          },
          postulante: {
            tipoDoc: 3,
            nroDoc: '07899681',
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (state === 'initial') {
    return (
      <View
        style={
          state === 'initial'
            ? containerStyles.initialRoot
            : containerStyles.afterRoot
        }>
        <View style={containerStyles.containerTopBar}>
          {actualDate !== undefined ? (
            <>
              <TouchableOpacity style={{flex: 1}} onPress={callbackStop}>
                <CustomText
                  style={{
                    ...topBarStyles.textAfterLogo,
                    flex: undefined,
                    fontSize: 20,
                    textAlign: 'center',
                    marginRight: 0,
                    color: colors.white,
                  }}
                  typography="Lato-Regular">
                  Cancelar
                </CustomText>
              </TouchableOpacity>
              <View style={topBarStyles.divider} />
              <CustomText
                style={{
                  ...topBarStyles.textAfterLogo,
                  fontSize: 20,
                  textAlign: 'center',
                  flex: 1,
                  marginRight: 0,
                }}
                typography="Lato-Regular">
                {getConvertedTimer(actualDate)}
              </CustomText>
            </>
          ) : (
            <CustomText
              style={{
                ...topBarStyles.textAfterLogo,
                textAlign: 'center',
                flex: 1,
                fontSize: 20,
              }}
              typography="Lato-Regular">
              Temporizador
            </CustomText>
          )}
        </View>

        {actualDate === undefined ? (
          <>
            <View style={containerStyles.timerContainer}>
              <CustomText style={textStyles.timerText} typography="Lato-Italic">
                {actualDate !== undefined
                  ? getConvertedTimer(actualDate)
                  : '00:00:00'}
              </CustomText>
            </View>

            <View
              style={{
                backgroundColor:
                  state === 'initial' ? colors.red : colors.secondary,
                flex: 0.05,
              }}
            />
            <View style={containerStyles.buttonContainer}>
              <ButtonTimer
                action={callbackStop}
                title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                setIsShownPicker(!isShownPicker);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <CustomText
                typography="Lato-Regular"
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  color: colors.white,
                  marginBottom: 40,
                }}>
                Formulario
              </CustomText>
            </TouchableOpacity>

            {isShownPicker ? (
              <MultipleSelectPicker
                items={[
                  {label: 'itachi', value: '1'},
                  {label: 'kakashi', value: '2'},
                  {label: 'madara', value: '3'},
                  {label: 'menato', value: '4'},
                  {label: 'naruto', value: '5'},
                  {label: 'hinata', value: '6'},
                  {label: 'jiraya', value: '7'},
                  {label: 'tsunade', value: '8'},
                  {label: 'naruto', value: '9'},
                  {label: 'sasuke', value: '10'},
                  {label: 'hashirama', value: '11'},
                  {label: 'tobirama', value: '12'},
                  {label: 'pain', value: '13'},
                  {label: 'sarada', value: '14'},
                  {label: 'sakura', value: '15'},
                  {label: 'asura', value: '16'},
                  {label: 'indra', value: '17'},
                ]}
                onSelectionsChange={ele => {
                  setSelectedItems(ele);
                }}
                selectedItems={selectedItems}
                buttonStyle={{
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                buttonText="hello"
                checkboxStyle={{height: 20, width: 20}}
              />
            ) : null}

            {(selectedItems || []).map((item: any, index) => {
              return (
                <CustomText
                  typography="Lato-Regular"
                  key={index}
                  style={{
                    fontSize: 20,
                    color: colors.white,
                    textAlign: 'center',
                    marginTop: 30,
                  }}>
                  {item.label}
                </CustomText>
              );
            })}
          </>
        )}
      </View>
    );
  } else {
    return (
      <ScrollView style={{backgroundColor: colors.terciary}}>
        <View
          style={
            state === 'initial'
              ? containerStyles.initialRoot
              : containerStyles.afterRoot
          }>
          <View style={containerStyles.containerTopBar}>
            {actualDate !== undefined ? (
              <>
                <TouchableOpacity style={{flex: 1}} onPress={callbackStop}>
                  <CustomText
                    style={{
                      ...topBarStyles.textAfterLogo,
                      flex: undefined,
                      fontSize: 20,
                      textAlign: 'center',
                      marginRight: 0,
                      color: colors.white,
                    }}
                    typography="Lato-Regular">
                    Cancelar
                  </CustomText>
                </TouchableOpacity>
                <View style={topBarStyles.divider} />
                <CustomText
                  style={{
                    ...topBarStyles.textAfterLogo,
                    fontSize: 20,
                    textAlign: 'center',
                    flex: 1,
                    marginRight: 0,
                  }}
                  typography="Lato-Regular">
                  {getConvertedTimer(actualDate)}
                </CustomText>
              </>
            ) : (
              <CustomText
                style={{
                  ...topBarStyles.textAfterLogo,
                  textAlign: 'center',
                  flex: 1,
                  fontSize: 20,
                }}
                typography="Lato-Regular">
                Temporizador
              </CustomText>
            )}
          </View>

          {actualDate === undefined ? (
            <>
              <View style={containerStyles.timerContainer}>
                <CustomText
                  style={textStyles.timerText}
                  typography="Lato-Italic">
                  {actualDate !== undefined
                    ? getConvertedTimer(actualDate)
                    : '00:00:00'}
                </CustomText>
              </View>

              <View
                style={{
                  backgroundColor:
                    state === 'initial' ? colors.red : colors.secondary,
                  flex: 0.05,
                }}
              />
              <View style={containerStyles.buttonContainer}>
                <ButtonTimer
                  action={callbackStop}
                  title={state === 'initial' ? 'COMENZAR' : 'DETENER'}
                />
              </View>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  setIsShownPicker(!isShownPicker);
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40,
                }}>
                <CustomText
                  typography="Lato-Regular"
                  style={{
                    textAlign: 'center',
                    fontSize: 30,
                    color: colors.white,
                    marginBottom: 40,
                  }}>
                  {!isShownPicker ? 'ABRIR FORMULARIO' : 'CERRAR FORMULARIO'}
                </CustomText>
              </TouchableOpacity>

              {isShownPicker ? (
                <MultipleSelectPicker
                  items={[
                    {
                      label:
                        'Alinear los espejos retrovisores laterales exteriores y el espejo retrovisor central interior, según corresponda a la categoría vehicular; y de manera correcta.',
                      value: '1',
                    },
                    {
                      label:
                        'Verificar el correcto funcionamiento del sistema de luces (luces direccionales, luces intermitentes de emergencia, luces delanteras) y de la bocina.',
                      value: '2',
                    },
                    {label: 'Abrocharse el cinturón de seguridad.', value: '3'},
                    {
                      label:
                        'Colocar correctamente, el asiento (ángulo de inclinación de 90º a 105º), y el cabezal de seguridad (reposacabezas) del conductor.',
                      value: '4',
                    },
                    {
                      label:
                        'Seguir las indicaciones del evaluador, en todo momento.',
                      value: '5',
                    },
                    {
                      label:
                        'Liberar el freno de mano del vehículo antes de iniciar la partida.',
                      value: '6',
                    },
                    {
                      label:
                        'Demostrar dominio del uso de los mandos del vehículo (frenos, acelerador, embrague, caja de cambios)',
                      value: '7',
                    },
                    {label: 'No detenerse innecesariamente.', value: '8'},
                    {
                      label:
                        'Conducir con ambas manos sobre el volante de dirección, salvo por la necesidad de accionar un comando del vehículo.',
                      value: '9',
                    },
                    {
                      label: 'Desplazarse dentro del carril correspondiente. ',
                      value: '10',
                    },
                    {
                      label:
                        'Respetar las señales de velocidad máxima y mínima instaladas en la infraestructura cerrada a la circulación vial.',
                      value: '11',
                    },
                    {
                      label:
                        'Respetar los semáforos, las señales horizontales y verticales, y detenerse ante los cruceros peatonales, según corresponda.',
                      value: '12',
                    },
                    {
                      label:
                        'Respetar la señalización preventiva de cruce de ciclovía.',
                      value: '13',
                    },
                    {label: 'No perder el control del vehículo.', value: '14'},
                    {
                      label:
                        'No realizar maniobras temerarias, generando riesgo o un accidente de tránsito.',
                      value: '15',
                    },
                    {label: 'No frenar bruscamente.', value: '16'},
                    {
                      label: 'No tocar el claxon innecesariamente.',
                      value: '17',
                    },
                  ]}
                  onSelectionsChange={ele => {
                    setSelectedItems(ele);
                  }}
                  selectedItems={selectedItems}
                  buttonStyle={{
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  buttonText="hello"
                  checkboxStyle={{height: 20, width: 20}}
                />
              ) : null}

              {(selectedItems || []).map((item: any, index) => {
                return (
                  <CustomText
                    typography="Lato-Regular"
                    key={index}
                    style={{
                      fontSize: 20,
                      color: colors.white,
                      textAlign: 'center',
                      marginTop: 30,
                      marginBottom: index === selectedItems.length ? 0 : 30,
                    }}>
                    {item.label}
                  </CustomText>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>
    );
  }
};

export default TimerPage;

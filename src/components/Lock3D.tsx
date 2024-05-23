import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Group, Mesh, MeshStandardMaterial } from "three"
import type { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
	nodes: {
		Cube: Mesh
		Окружность_1: Mesh
		Окружность_2: Mesh
		Цилиндр: Mesh
		Окружность001: Mesh
	}
	materials: {
		Корпус: MeshStandardMaterial
		["Доп элемент"]: MeshStandardMaterial
		Ничего: MeshStandardMaterial
		Металл: MeshStandardMaterial
	}
}

export function Model(props: JSX.IntrinsicElements["group"]) {
	const group = useRef<Group>(null)
	const { nodes, materials } = useGLTF("/lock.glb") as GLTFResult

	useFrame(() => {
		if (group.current) group.current.rotation.y += 0.02
	})

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<mesh
					name="Cube"
					castShadow
					receiveShadow
					geometry={nodes.Cube.geometry}
					material={materials.Корпус}
					position={[0.006, 0, -0.001]}
					rotation={[0, -Math.PI / 2, 0]}
					scale={[0.35, 1, 1]}
				/>
				<group
					name="Окружность"
					position={[0.006, 0.098, 0.389]}
					rotation={[Math.PI / 2, -Math.PI / 2, 0]}
					scale={0.276}
				>
					<mesh
						name="Окружность_1"
						castShadow
						receiveShadow
						geometry={nodes.Окружность_1.geometry}
						material={materials["Доп элемент"]}
					/>
					<mesh
						name="Окружность_2"
						castShadow
						receiveShadow
						geometry={nodes.Окружность_2.geometry}
						material={materials.Ничего}
					/>
				</group>
				<mesh
					name="Цилиндр"
					castShadow
					receiveShadow
					geometry={nodes.Цилиндр.geometry}
					material={materials.Металл}
					position={[-0.57, 0.632, 0]}
					scale={0.171}
				/>
				<mesh
					name="Окружность001"
					castShadow
					receiveShadow
					geometry={nodes.Окружность001.geometry}
					material={materials.Ничего}
					position={[0.647, 1, 0.041]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload("/lock.glb")
